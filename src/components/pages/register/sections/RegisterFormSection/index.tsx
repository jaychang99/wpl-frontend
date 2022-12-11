import { css } from "@emotion/react";
import Button from "components/common/Button";
import Input from "components/common/Input";
import Modal from "components/common/Modal";
import { StyledRegisterFormSection } from "components/pages/register/sections/RegisterFormSection/styles";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { RegisterInputFields } from "types/inputs";
import { serverAxios } from "utils/commonAxios";
import { AxiosError } from "axios";
import {
  ALPHANUMERIC_ONLY_REGEXT,
  VALID_EMAIL_REGEX,
  VALID_PASSWORD_REGEX,
} from "constants/regex";

function RegisterFormSection() {
  const [originalPassword, setOriginalPassword] = useState("");

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

      const email = formElements?.email.value;
      const password = formElements?.password.value;
      const passwordConfirm = formElements?.passwordConfirm.value;
      const nickname = formElements?.nickname.value;

      // validate email
      if (!email) {
        setModalContent({
          title: "Email Empty",
          content: "Please input email",
        });
        setShowModal(true);
        return;
      }
      if (!email.match(VALID_EMAIL_REGEX)) {
        setModalContent({
          title: "Invalid Email",
          content: "Invalid email address. Please input again. ",
        });
        setShowModal(true);
        return;
      }
      // validate password
      if (!password) {
        setModalContent({
          title: "Password Empty",
          content: "Please input password",
        });
        setShowModal(true);
        return;
      }
      if (!password?.match(VALID_PASSWORD_REGEX)) {
        setModalContent({
          title: "Invalid Password",
          content:
            "Password needs to have at least 6 characters, one capital letter, one lowercase letter, at least one digit and one special character.",
        });
        setShowModal(true);
        return;
      }

      // validate password confirm
      if (!passwordConfirm) {
        setModalContent({
          title: "Confirm Password Empty",
          content: "Please confirm password",
        });
        setShowModal(true);
        return;
      }
      if (!(passwordConfirm === password)) {
        setModalContent({
          title: "Passwords Mismatch",
          content: "Passwords do not match",
        });
        setShowModal(true);
        return;
      }

      // validate nickname
      if (!nickname) {
        setModalContent({
          title: "Nickname Empty",
          content: "Please input nickname. ",
        });
        setShowModal(true);
        return;
      }
      if (!nickname?.match(ALPHANUMERIC_ONLY_REGEXT) || nickname.length > 11) {
        setModalContent({
          title: "Invalid Nickname",
          content:
            "Name should be at most 10 characters long, and must be alphanumeric.",
        });
        setShowModal(true);
        return;
      }

      try {
        const config = {};
        const body = {
          email: email,
          password: password,
          nickname: nickname,
        };

        serverAxios
          .post(requestURL, body, config)
          .then(function (response) {
            // on success of POST request
            // register successful
            setModalContent({
              title: "Register Successful!",
              content: "Register Successful!",
            });
            setShowModal(true);
          })
          .catch((error) => {
            setModalContent({
              title: "Sign up Request Failed",
              content: "Sign up Request Failed. Please contact the site owner",
            });
            setShowModal(true);
          });
      } catch (e) {
        console.log(e);
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
            // type="email"
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
            setOriginalPassword={setOriginalPassword}
          />
          <Input
            type="password"
            label="confirm password"
            name="passwordConfirm"
            placeholder="Please confirm password"
            validationPipe="passwordConfirm"
            originalPassword={originalPassword}
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
