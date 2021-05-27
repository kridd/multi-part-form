import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form } from "./components/form";
import { Navigation } from "./components/navigation";
import { SCHEMA, STAGES } from "./components/form/form.config";

const SuccessMessage = () => <div>Thanks a lot ♥️</div>;

const App = () => {
  const [stage, setStage] = useState("USER");
  const methods = useForm({
    resolver: yupResolver(SCHEMA),
  });

  // TODO: This should be a util with a test
  const { nextStage } = STAGES.find((item) => item.stage === stage) || {};

  const onSubmit = (data) => {
    console.log("data", data);
    setStage(nextStage);
  };

  return (
    <FormProvider {...methods}>
      <div className="max-w-md mx-auto">
        <Navigation setStage={setStage} currentStage={stage} />
        {stage !== "REVIEW" ? (
          <Form onSubmit={onSubmit} stage={stage} />
        ) : (
          <SuccessMessage />
        )}
      </div>
    </FormProvider>
  );
};

export default App;
