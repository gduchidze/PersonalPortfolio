import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();
  
  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    

    const templateparams = {
      from_name: form.current.user_name.value,
      from_email: form.current.user_email.value,
      to_name: "gduchidze",
      message: form.current.message.value,
    };

    emailjs.send(serviceId, templateId, templateparams, publicKey).then(
      () => {
        toast.success("Successfully sent!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        form.current.reset();
      },
      () => {
        toast.error("Something went wrong", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    );
  };
  return (
    <main className="contact">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder={t("name")}/>
        <input type="email" name="user_email" placeholder={t("email")} />
        <textarea name="message" placeholder={t("message")} />
        <button type="submit" className="btn">
          {t("send")}
        </button>
      </form>
    </main>
  );
};

export default Contact;
