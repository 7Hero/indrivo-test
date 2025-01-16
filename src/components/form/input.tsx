import { ComponentProps } from "react";
import "./form.css";

type InputProps = {
  label: string;
} & ComponentProps<"input">;

export const Input = ({ id, label, type = "text", ...props }: InputProps) => (
  <div className="form__field">
    <label className="form__label" htmlFor={id}>
      {label}
    </label>
    <input className="form__input" type={type} id={id} {...props} />
  </div>
);
