import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n0peywj', 'template_11bkmxm', form.current, {
        publicKey: 'WEwO-L95FMnzrQ0ZK',
      })
      .then(
        () => {
          alert('Email sent successfully');
        },
        (error) => {
          alert('FAILED...' + error.text);
        },
      );
  };

  return (
    <form className="flex flex-col gap-3 items-between" ref={form} onSubmit={sendEmail}>
      <section className='flex justify-between'>
      <label>Name:</label>
      <input className="border rounded-sm focus:outline-sky-500" type="text" name="name" />
      <label>Email:</label>
      <input className="border rounded-sm focus:outline-sky-500" type="email" name="email" />
      </section>

      <label>Title:</label>
      <input className="border rounded-sm focus:outline-sky-500" type="text" name="title" />
      <label>Message:</label>
      <textarea className="border rounded-sm w-lg min-h-36 focus:outline-sky-500" name="message" />
      <input className="border rounded-lg p-1 w-lg text-white bg-sky-500 hover:bg-sky-700" type="submit" value="Send" />
    </form>
  );
};
