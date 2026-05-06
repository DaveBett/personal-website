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
      <section className='flex flex-col gap-3 xs:flex-wrap justify-between'>
      <label>Name:</label>
      <input className="border rounded-sm focus:outline-emerald-600" type="text" name="name" />
      <label>Email:</label>
      <input className="border rounded-sm focus:outline-emerald-600" type="email" name="email" />
      </section>

      <label>Title:</label>
      <input className="border rounded-sm focus:outline-emerald-600 w-xs md:w-md lg:w-lg" type="text" name="title" />
      <label>Message:</label>
      <textarea className="border rounded-sm w-xs md:w-md lg:w-lg min-h-36 focus:outline-emerald-600" name="message" />
      <input className="border rounded-lg p-1 w-xs md:w-md lg:w-lg text-white bg-zinc-700 hover:bg-emerald-600 hover:shadow-xl/10 hover:shadow-emerald-600" type="submit" value="Send" />
    </form>
  );
};
