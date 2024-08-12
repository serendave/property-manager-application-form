import { createContext, useContext, useState } from 'react';
import { MultiStepFormData } from '../interfaces';

interface MultistepFormStateContextProps {
  formData: Partial<MultiStepFormData>;
  setFormData: (data: Partial<MultiStepFormData>) => void;
}

const MultistepFormStateContext = createContext({
  formData: {},
  setFormData: () => {},
} as MultistepFormStateContextProps);

interface FormProviderProps {
  children: React.ReactNode;
}

function MultistepFormProvider({ children }: FormProviderProps) {
  const [formData, setFormData] = useState({} as Partial<MultiStepFormData>);

  return (
    <MultistepFormStateContext.Provider value={{ formData, setFormData }}>
      {children}
    </MultistepFormStateContext.Provider>
  );
}

const useMultistepFormState = () => useContext(MultistepFormStateContext);

export { MultistepFormProvider, useMultistepFormState };
