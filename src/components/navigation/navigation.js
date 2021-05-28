import React from "react";
import { useFormContext } from "react-hook-form";

import { Tab } from "../tab";
import { USER, PRIVACY, REVIEW } from "../../consts";

export const Navigation = ({ setStage, currentStage }) => {
  const {
    formState: {
      isDirty: formIsDirty,
      isValid: formIsValid,
      isSubmitted: formisSubmitted,
    },
  } = useFormContext();

  /* NOTE: 🙈 I've bodged the USER tab for now to show as erroring whenever the form has an error
    I can get away with this in this instance, because I know only the first screen will have an error
    But, in future we would need to find the stage the error exists within
  */

  // TODO: This should really loop through the STAGES config to generate tabs
  return (
    <>
      <Tab
        onClick={() => setStage(USER)}
        active={currentStage === USER}
        label="User"
        erroring={(formIsDirty || formisSubmitted) && !formIsValid}
      />
      <Tab
        onClick={() => setStage(PRIVACY)}
        active={currentStage === PRIVACY}
        label="Privacy"
      />
      <Tab
        disabled={!formIsValid}
        onClick={() => setStage(REVIEW)}
        active={currentStage === REVIEW}
        label="Review"
      />
    </>
  );
};
