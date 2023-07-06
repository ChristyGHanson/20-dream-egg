import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
const [message,setMessage]=useState("")
  const sendEmail = (e) => {
    e.preventDefault();

    // service id and template id
    emailjs.sendForm('service_soe6osd', 'template_w6julj5', form.current, 'uFrLgFUveGUMwSxT6')
      .then((result) => {
          console.log(result.text);
          setMessage("Your message was sent successfully.");
      }, (error) => {
          console.log(error.text);
          setMessage("Message not sent.");
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" />
      <p>{message}</p>
    </form>
  );
};

