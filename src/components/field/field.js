import React from "react";
import { useFormContext } from "react-hook-form";

// This RawField allows us to render a field without the need for the RHF setup.
// This makes the component more flexible - and easier to test.
export const RawField = ({ label, name, error, type, register, ...props }) => {
  return (
    <div className="p-2" {...props}>
      <label className="block text-sm font-medium text-gray-700">
        {label}
        <input
          {...register}
          type={type || "text"}
          className={`${
            error && "border-red-900"
          } border col-span-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm rounded-md`}
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
