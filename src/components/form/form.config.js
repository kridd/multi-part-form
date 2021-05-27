import * as yup from "yup";

import { USER, PRIVACY, REVIEW } from "../../consts";

export const SCHEMA = yup.object().shape({
  name: yup.string().required(),
  role: yup.string(),
  email: yup.string().required().email(),
  password: yup
    .string()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
    .required(),
  mainProductEmails: yup.boolean(),
  otherProductEmails: yup.boolean(),
});

export const STAGES = [
  {
    stage: USER,
    nextStage: PRIVACY,
    fields: {
      name: {
        label: "full name",
      },
      role: {
        label: "Job title",
      },
      email: {
        label: "Email address",
      },
      password: {
        label: "Password",
        type: "password",
        errorMessage: "Please make your password is super complicated",
      },
    },
  },
  {
    stage: PRIVACY,
    nextStage: REVIEW,
    fields: {
      mainProductEmails: {
        label: "Receive updates by email",
        type: "checkbox",
      },
      otherProductEmails: {
        label: "Receive updates about other products by email",
        type: "checkbox",
      },
    },
  },
  {
    stage: REVIEW,
    nextStage: null,
    fields: null,
  },
];
