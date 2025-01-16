import { useEffect, useRef, useState } from "react";
import { Input, Textarea } from "./form";
import { Submit } from "./form/submit";

export const FeedbackForm = () => {
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const validate = () => setIsValid(form.checkValidity());

    form.addEventListener("input", validate);
    return () => form.removeEventListener("input", validate);
  }, []);

  return (
    <div className="page__content page__content--feedback">
      <form ref={formRef} className="feedback-form">
        <Input label="Name" id="name" required />
        <Input label="Phone number" id="phone" type="tel" required />
        <Input label="Email" id="email" type="email" required />
        <Textarea label="Message" id="message" required />
        <Submit disabled={!isValid}>Submit</Submit>
      </form>
    </div>
  );
};
