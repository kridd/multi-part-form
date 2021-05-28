import React from "react";
import { useFormContext } from "react-hook-form";

// Enhancement:
// We may want to be able to handle different input types differently.
// For example, Checkbox / Radio groups may need different html, or styling.
// In this case, we could split out new Raw[Checkbox | TextArea | etc] components.
// Destructure the type prop and make a decision based on that.
// I haven't done this here because of time limitations.

// NOTE: This RawField allows us to render a field without the need for the RHF setup.
// This makes the component more flexible - and easier to test.
export const RawField = ({ label, name, error, type, register, ...props }) => {
  return (
    <div className="p-2" {...props}>
      <label className="block text-sm font-medium text-gray-700">
        {label}
        <input
          {...register}
          type={type || "text"}
          className={`${error && "border-red-900"} ${
            type === "checkbox" ? "mx-2 float-left" : "block w-full"
          } border shadow-sm mt-1  sm:text-sm p-2`}
        />
      </label>
      <p className="text-red-800 block">{error}</p>
    </div>
  );
};

export const Field = ({ name, ...props }) => {
  const { register } = useFormContext();
  return <RawField register={register(name)} {...props} />;
};
