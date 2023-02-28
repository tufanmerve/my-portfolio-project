import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/ContactForm.css";
import { useFormik } from 'formik';
import validationSchema from "./validation"



export const ContactForm = () => {

  const serviceID = "service_rwrluje";
  const templateID = "template_ygtdksb";
  const publicKey = "HSZ8Rr1a4wMigWQaN";

  const form = useRef();
  const [result,setResult] = useState(false);

  const { handleChange, values, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema,

  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log("error:", error.text);
      });

    e.target.reset();
    setResult(true);

  };



  return (
    <div className='contact-form'>
      <div className='title'>Contact Me</div>
      <form ref={form} onSubmit={sendEmail} id='form'>
        <label htmlFor="name" className='form__title'>Name</label>
        <input
          id="name"
          className='form__input'
          name="name"
          type="text"
          onChange={handleChange}
          value={values.name}
        />
        {errors.name ? <div className='error'>{errors.name}</div> : null}


        <label htmlFor="email">Email Address</label>
        <input
          className='form__input'
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        {errors.email ? <div className='error'>{errors.email}</div> : null}

        <label htmlFor='message' className='form__title '>Message</label>
        <textarea className='form__textarea'
          id='message'
          name="message"
          type="text"
          onChange={handleChange}
          value={values.message}
        />
        {errors.message ? <div className='error'>{errors.message}</div> : null}

        <button type='submit' value="Send">SEND</button>
        <div>{result && <p className='success'>Message sent successfully</p>}</div>
      </form>
    </div>
  )
}

