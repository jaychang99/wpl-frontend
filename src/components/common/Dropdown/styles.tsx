import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const DropdownContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 56px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  z-index: 50;
`;

export const SelectedLabel = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.primary200};
  background-color: transparent;
  border-radius: 10px;

  padding: 15px;
  color: ${({ theme }) => theme.color.primary500};
  font-size: 16px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
`;

const activeExist = ({ active = true }) => {
  return `display: ${active ? "block" : "none"}`;
};

export const OptionList = styled.ul`
  position: absolute;
  margin-top: 2px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.primary400};

  overflow: hidden;

  ${activeExist};
  transition: 0.2s;
`;

export const OptionItem = styled.li<{ selectedCheck: boolean }>`
  padding: 15px;
  transition: 0.2s;
  background-color: ${({ theme }) => theme.color.white};
  &:hover {
    background-color: ${({ theme }) => theme.color.primary100};
  }

  ${({ selectedCheck, theme }) =>
    `background-color: ${
      selectedCheck ? theme.color.primary100 : theme.color.white
    };
    color: ${selectedCheck ? theme.color.primary900 : theme.color.primary500};
    font-weight: ${selectedCheck ? 700 : 400};
    `};

  display: flex;
  justify-content: space-between;
`;
