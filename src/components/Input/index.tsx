import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { Container, Label } from "./styles";
interface InputProps {
  id: string;
  label: string;
  type: string;
  error?: FieldError;
  placeholder: string;
  autoComplete?: string;
}

const Input = forwardRef(
  (
    {
      id,
      label,
      error,
      type,
      placeholder,
      autoComplete,
      ...register
    }: InputProps,
    ref: React.LegacyRef<HTMLInputElement>
  ) => (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Container>
        <input
          id={id}
          type={type}
          {...register}
          placeholder={placeholder}
          ref={ref}
        />

        {error?.message && <span>{error.message}</span>}
      </Container>
    </>
  )
);

export default Input;
