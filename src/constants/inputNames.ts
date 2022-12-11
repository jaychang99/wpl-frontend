export const REPORT_INPUT_FIELDS = {
  placeId: "placeid",
  crowdedness: "crowdedness",
} as const;

export const REGISTER_INPUT_FIELDS = {
  email: "email",
  password: "password",
  passwordConfirm: "passwordConfirm",
  nickname: "nickname",
} as const;

export const LOGIN_INPUT_FIELDS = {
  email: "email",
  password: "password",
} as const;
