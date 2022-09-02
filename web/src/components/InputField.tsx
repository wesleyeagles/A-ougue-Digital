import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
};

// '' => false
// 'error message stuff' => true

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
  let InputOrTextarea = Input;
  if (textarea) {
   
  }
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputOrTextarea  {...field} {...props} id={field.name} />
      {error ? <FormErrorMessage>
      {field.name === 'username'? 'O usuário deve conter mais que 2 caracteres' : null}
      {field.name === 'name'? 'Por favor digite seu nome completo' : null}
      {field.name === 'email'? 'Digite um email válido' : null}
      {field.name === 'adress'? 'Digite um endereço válido' : null}
      {field.name === 'password'? 'A senha deve conter mais que 2 caracteres' : null}
      </FormErrorMessage> : null}
    </FormControl>
  );
};