import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
// import { yupResolver } from "@hookform/resolvers/yup";
// import validationSchema from './validation';
import "../styles/ContactForm.css";
import { useMediaQuery } from 'react-responsive';



const ContactForm = () => {
    const [success,setSuccess] = useState(false);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })

    const serviceID = "service_rwrluje";
    const templateID = "template_ygtdksb";
    const publicKey = "HSZ8Rr1a4wMigWQaN";

    const {
        register,
        handleSubmit,
        // errors,
        reset,
        formState: { errors }

    } = useForm({
        // resolver: yupResolver(validationSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        },
    });

    const form = useRef();

    const sendEmail = () => {


        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log("error:", error.text);
            });

        reset();
        setSuccess(true);
        

    };





    return (
        <section className='contact-form' id='contact-form' >

            

            {isTabletOrMobile ?
            <div>
                <h2 className='mbl-title' >Contact Me</h2>
                <form ref={form} onSubmit={handleSubmit(sendEmail)} id="form" className='mbl-form' >
                    <label htmlFor="name" className='label'></label>
                    <input type="text"
                        placeholder='Name'
                        className='mbl-input'
                        id="name"
                        name="name"
                        {...register("name", { required: true })} />
                    {errors.name && errors.name.type === "required" && <span className='error'>* Name field is required</span>}



                    <label htmlFor="email" className='label'></label>
                    <input type="email"
                    className='mbl-input'
                        placeholder='Email'
                        id="email"
                        name="email"
                        {...register("email", { required: true })} />
                    {errors.email && errors.email.type === "required" && <span className='error'>* Email field is required</span>}


                    <label htmlFor="message" className='label'></label>
                    <textarea id="message"
                    className='mbl-textarea'
                        name="message"
                        placeholder='Message'
                        {...register('message', { required: true })} />
                    {errors.message && errors.message.type === "required" && <span className='error'>* Message field is required</span>}
                    <button type="submit">Submit</button>
                    {success ? <div className='success'>Thank you for your message. I will get back to you as soon as possible.</div> : null}
                    <hr/>

                </form></div> :

                <div className='form-div'>
                     <h2 className='title' >Contact Me</h2>
                <form ref={form} onSubmit={handleSubmit(sendEmail)} id="form" className='form' >
                    <label htmlFor="name" className='label'></label>
                    <input type="text"
                        placeholder='Name'
                        id="name"
                        name="name"
                        {...register("name", { required: true })} />
                    {errors.name && errors.name.type === "required" && <span className='error'>* Name field is required</span>}



                    <label htmlFor="email" className='label'></label>
                    <input type="email"
                        placeholder='Email'
                        id="email"
                        name="email"
                        {...register("email", { required: true })} />
                    {errors.email && errors.email.type === "required" && <span className='error'>* Email field is required</span>}


                    <label htmlFor="message" className='label'></label>
                    <textarea id="message"
                        name="message"
                        className='textarea'
                        placeholder='Message'
                        {...register('message', { required: true })} />
                    {errors.message && errors.message.type === "required" && <span className='error'>* Message field is required</span>}
                    <button type="submit">Submit</button>
                    {success ? <div className='success'>Thank you for your message. I will get back to you as soon as possible.</div> : null}

                </form></div>}

         

        </section>
    )
}

export default ContactForm