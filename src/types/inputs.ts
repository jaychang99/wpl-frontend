import { REGISTER_INPUT_FIELDS } from "constants/inputNames";

type InputFieldValue =
  typeof REGISTER_INPUT_FIELDS[keyof typeof REGISTER_INPUT_FIELDS];

export type InputFields = {
  [T in InputFieldValue]: HTMLInputElement;
};
