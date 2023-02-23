import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/ContactForm.css"



export const ContactForm = () => {

  const serviceID = "service_rwrluje";
  const templateID = "template_ygtdksb";
  const publicKey = "HSZ8Rr1a4wMigWQaN";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log( "error:", error.text);
      });

      e.target.reset();

  };



  return (
    <div className='contact-form'>
      <div className='title'>Contact Me</div>
      <form ref={form} onSubmit={sendEmail}  id='form'>
        <label className='form__title'>Name</label>
        <input  className='form__input' type="text" name="name" placeholder='Name' />
        <label className='form__title '>Email</label>
        <input className='form__input' type="email" name="email" placeholder='Email' />
        <label className='form__title '>Message</label>
        <textarea className='form__textarea' name="message" />
        <button className='form__button' type='submit' value="Send">SEND</button>
      </form>
    </div>
  )
}

