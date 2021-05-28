import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form } from "./components/form";
import { Navigation } from "./components/navigation";
import { SCHEMA, STAGES } from "./components/form/form.config";

const SuccessMessage = () => (
  <p className="my-8 text-2xl">
    <span class="block text-4xl">✅</span> Nailed it! Please check your emails
    for confirmation.
  </p>
);

const App = () => {
  const [stage, setStage] = useState("USER");
  const methods = useForm({
    resolver: yupResolver(SCHEMA),
  });

  // TODO: This should be a util with a test
  const { nextStage } = STAGES.find((item) => item.stage === stage) || {};

  const onSubmit = (data) => {
    setStage(nextStage);
    if (stage !== "REVIEW") {
      return;
    }

    console.log({ data });
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
