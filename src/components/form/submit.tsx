import { ComponentProps, PropsWithChildren } from "react";
import "./form.css";

export const Submit = ({
  children,
  ...props
}: PropsWithChildren<ComponentProps<"button">>) => (
  <button className="form__submit-button" type="submit" {...props}>
    {children}
  </button>
);
