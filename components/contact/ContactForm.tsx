import { useState, useEffect, FC } from "react";
import { useForm } from "react-hook-form";
import { formOptions } from "../../utils";
import useContact from "../../hooks/useContact";
import Notification from "../ui/Notification";
import styles from "./ContactForm.module.css";
const ContactForm: FC = (): JSX.Element => {
  const contactMutation = useContact();
  const [inputs, setInputs] = useState<any>({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions());
  const onSubmit = (data: any) => {
    contactMutation?.mutate(inputs);
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    event.persist();
    setInputs((inputs: any) => ({ ...inputs, [name]: value }));
  };
  useEffect(() => {
    let timer: any;
    if (contactMutation?.isSuccess || contactMutation?.isError) {
      timer = setTimeout(() => {
        contactMutation.reset();
        reset();
        setInputs({});
      }, 1500);
    }
    return () => {
      clearInterval(timer);
    };
  }, [contactMutation, inputs, reset]);

  return (
    <section className={`${styles.contact}`}>
      <h1>How can I help you?</h1>
      <form
        className={`${styles.form} form__wrapper`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={`${styles.controls}`}>
          <div className={`${styles.control}  form__wrapper--group`}>
            <label
              className={`form__wrapper--label  ${
                errors.email ? "is-invalid" : ""
              }`}
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              autoComplete="off"
              type="email"
              {...register("email", { required: true, onChange: handleChange })}
              value={inputs?.email ? inputs?.email : ""}
              className={`form__wrapper--control  ${
                errors.email ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className={`${styles.control} form__wrapper--group`}>
            <label
              className={`form__wrapper--label  ${
                errors.name ? "is-invalid" : ""
              }`}
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              autoComplete="off"
              type="text"
              {...register("name", { required: true, onChange: handleChange })}
              value={inputs?.name ? inputs?.name : ""}
              className={`form__wrapper--control  ${
                errors.name ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </div>
        </div>
        <div className={`${styles.control} form__wrapper--control`}>
          <label
            className={`form__wrapper--label  ${
              errors.message ? "is-invalid" : ""
            }`}
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            rows={5}
            {...register("message", { required: true, onChange: handleChange })}
            value={inputs?.message ? inputs?.message : ""}
            className={`form__wrapper--control  ${
              errors.name ? "is-invalid" : ""
            }`}
          ></textarea>
          <div className="invalid-feedback">{errors.message?.message}</div>
        </div>

        <div className={`${styles.actions}`}>
          <button
            className="btn btn--gradient"
            disabled={
              !Object.keys(inputs)?.length || inputs?.message?.length < 10
            }
          >
            Send Message
          </button>
        </div>
      </form>

      {contactMutation?.isLoading ? (
        <Notification
          status="pending"
          title="Sending message..."
          message="Your message is on its way!"
        />
      ) : contactMutation?.isSuccess ? (
        <Notification
          status="success"
          title="Success!"
          message="Message sent successfully!"
        />
      ) : contactMutation?.isError ? (
        <Notification
          status="error"
          title="Error!"
          message={contactMutation?.error?.message}
        />
      ) : null}
    </section>
  );
};

export default ContactForm;
