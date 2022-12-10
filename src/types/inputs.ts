import {
  LOGIN_INPUT_FIELDS,
  REGISTER_INPUT_FIELDS,
} from "constants/inputNames";

type InputFieldValue =
  typeof REGISTER_INPUT_FIELDS[keyof typeof REGISTER_INPUT_FIELDS];

type LoginInputFieldValue =
  typeof LOGIN_INPUT_FIELDS[keyof typeof LOGIN_INPUT_FIELDS];

export type InputFields = {
  [T in InputFieldValue]: HTMLInputElement;
};
export type LoginInputFields = {
  [T in LoginInputFieldValue]: HTMLInputElement;
};
