import React from "react";
import { useFormContext } from "react-hook-form";

import { STAGES } from "./form.config";
import { Field } from "../field";

// TODO: Accessability improvements.
// 1. These form sections should be connected to the navigation tabs
// using `aria-labelledby`.
// 2. The tabs should make it clear that this content changes.

export const Form = ({ stage, onSubmit }) => {
  const {
    formState: { errors },
    handleSubmit,
  } = useFormContext();

  const { fields } = STAGES.find((item) => item.stage === stage);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.entries(fields).map(([name]) => {
        const { errorMessage, ...fieldSettings } = fields[name];
        return (
          <Field
            key={name}
            name={name}
            error={errors[name] ? errorMessage || errors[name].message : null}
            {...fieldSettings}
          />
        );
      })}

      <input
        type="submit"
        className="cursor-pointer mt-4 py-2 px-8 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 float-right"
      />
    </form>
  );
};
