import React from "react";
import Counter from "./components/Counter";
import MyForm from "./components/MyForm";
import ReducerSample from "./components/ReducerSample";
import { SampleProvider } from "./components/SampleContext";

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </>
  );
};

export default App;
