import { css } from "@emotion/react";
import Button from "components/common/Button";
import Input from "components/common/Input";
import Modal from "components/common/Modal";
import { StyledRegisterFormSection } from "components/pages/register/sections/RegisterFormSection/styles";
import { FormEvent, useCallback, useRef, useState } from "react";
import { RegisterInputFields } from "types/inputs";
import { serverAxios } from "utils/commonAxios";
import { AxiosError } from "axios";

function RegisterFormSection() {
  const originalPasswordRef = useRef("");

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    async function handleRegister() {
      const requestURL = "/auth/register";

      // the following is for the typescript compiler to be able to name if the inputs
      const form = e.currentTarget;
      const formElements = form
        ? (form.elements as typeof form.elements & RegisterInputFields)
        : null;

      try {
        const config = {};
        const body = {
          email: formElements?.email.value,
          password: formElements?.password.value,
          nickname: formElements?.nickname.value,
        };

        serverAxios
          .post(requestURL, body, config)
          .then(function (response) {
            // on success of POST request
            // register successful
          })
          .catch((error) => {
            setModalContent({
              title: "Login Request Failed",
              content: "Login Request Failed. Please contact the site owner",
            });
            setShowModal(true);
          });
      } catch (e) {
        console.log("YEEE");
      }
    }
    handleRegister();
  }, []);

  return (
    <>
      <Modal
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        title={modalContent.title}
        buttons={<></>}
        withCloseButton
      >
        {modalContent.content}
      </Modal>
      <form onSubmit={handleSubmit}>
        <StyledRegisterFormSection>
          <Input
            type="email"
            name="email"
            label="email"
            placeholder="Please input email"
            validationPipe="email"
          />
          <Input
            type="password"
            label="password"
            name="password"
            placeholder="Please input password"
            validationPipe="password"
          />
          <Input
            type="password"
            label="confirm password"
            placeholder="Please confirm password"
            validationPipe="passwordConfirm"
          />
          <Input
            name="nickname"
            label="nickname"
            placeholder="Please input nickname"
            validationPipe="nickname"
          />
          <Button
            type="submit"
            css={css`
              margin-top: 30px;
            `}
          >
            Register
          </Button>
        </StyledRegisterFormSection>
      </form>
    </>
  );
}

export default RegisterFormSection;
