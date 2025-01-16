import { ComponentProps } from "react";
import "./form.css";

type TextareaProps = {
  label: string;
} & ComponentProps<"textarea">;

export const Textarea = ({ id, label, ...props }: TextareaProps) => (
  <div className="form__field">
    <label htmlFor={id} className="form__label">
      {label}
    </label>
    <textarea
      id={id}
      rows={1}
      className="form__textarea"
      onChange={(e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
      }}
      {...props}
    />
  </div>
);
