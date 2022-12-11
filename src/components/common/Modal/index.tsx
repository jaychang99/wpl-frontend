import { useTheme } from "@emotion/react";
import Button from "components/common/Button";
import CloseIcon from "components/common/icons/CloseIcon";
import {
  ButtonContainer,
  CloseButton,
  ContentContainer,
  DimmedArea,
  ModalContainer,
  TitleContainer,
} from "components/common/Modal/styles";
import { PORTAL_ID } from "constants/portal";
import usePreventScroll from "hooks/usePreventScroll";
import { HTMLAttributes, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

function ScrollPreventer() {
  usePreventScroll();
  return null;
}

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  withCloseButton?: boolean;
  buttons: ReactNode;
}

function Modal({
  open,
  onClose,
  title,
  withCloseButton = false,
  buttons,
  children,
  ...props
}: Props) {
  const {
    color: { black500 },
  } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modal = (
    <>
      {open && (
        <>
          <ScrollPreventer />
          <DimmedArea
            onClick={({ target, currentTarget }) => {
              if (target === currentTarget) {
                onClose();
              }
            }}
          >
            <ModalContainer {...props}>
              <TitleContainer>
                {title}
                <CloseButton onClick={onClose}>
                  <CloseIcon />
                </CloseButton>
              </TitleContainer>
              <ContentContainer>{children}</ContentContainer>
              <ButtonContainer>
                <>
                  {withCloseButton && (
                    <Button size="small" filled={false} onClick={onClose}>
                      OK
                    </Button>
                  )}
                  {buttons}
                </>
              </ButtonContainer>
            </ModalContainer>
          </DimmedArea>
        </>
      )}
    </>
  );

  if (mounted) {
    return createPortal(modal, document.getElementById(PORTAL_ID)!);
  } else {
    return null;
  }
}

export default Modal;
