import { useState, useMemo } from "react";

const useHandleChange = () => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    let { type, checked, name, value } = e.target;
    value = type === "checkbox" ? checked : value;

    setFormValues((formValues) => {
      return {
        ...formValues,
        [name]: value,
      };
    });
  };

  return { formValues, handleChange };
};

export const Hooks = {
  useHandleChange,
};
