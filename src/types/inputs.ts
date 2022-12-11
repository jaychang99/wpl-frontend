import {
  LOGIN_INPUT_FIELDS,
  REGISTER_INPUT_FIELDS,
  REPORT_INPUT_FIELDS,
} from "constants/inputNames";

type ReportInputFieldValue =
  typeof REPORT_INPUT_FIELDS[keyof typeof REPORT_INPUT_FIELDS];

type RegisterInputFieldValue =
  typeof REGISTER_INPUT_FIELDS[keyof typeof REGISTER_INPUT_FIELDS];

type LoginInputFieldValue =
  typeof LOGIN_INPUT_FIELDS[keyof typeof LOGIN_INPUT_FIELDS];

export type ReportInputFields = {
  [T in ReportInputFieldValue]: HTMLInputElement;
};

export type RegisterInputFields = {
  [T in RegisterInputFieldValue]: HTMLInputElement;
};
export type LoginInputFields = {
  [T in LoginInputFieldValue]: HTMLInputElement;
};
