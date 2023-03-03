import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
// import { yupResolver } from "@hookform/resolvers/yup";
// import validationSchema from './validation';
import "../styles/ContactForm.css";



const ContactForm = () => {

    const serviceID = "service_rwrluje";
    const templateID = "template_ygtdksb";
    const publicKey = "HSZ8Rr1a4wMigWQaN";

    const {
        register,
        handleSubmit,
        // errors,
        reset,
        formState:{errors}

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

    };


    


    return (
        <section className='contact-form' id='contact-form' >
            
            <form ref={form} onSubmit={handleSubmit(sendEmail)} id="form" className='form' >
                <label htmlFor="name" className='label'>Name</label>
                <input type="text"
                    id="name"
                    name="name"
                    {...register("name",{required:true})} />
                    {errors.name && errors.name.type === "required" && <span className='error'>* Name field is required</span>}
                    


                <label htmlFor="email"  className='label'>Email</label>
                <input type="email"
                    id="email"
                    name="email"
                    {...register("email",{required:true })} />
                    {errors.email && errors.email.type === "required" && <span className='error'>* Email field is required</span>}


                <label htmlFor="message"  className='label'>Message</label>
                <textarea id="message"
                    name="message"
                    {...register('message',{required:true})} />
                    {errors.message && errors.message.type === "required" && <span className='error'>* Message field is required</span>}
                <button type="submit">Submit</button>

            </form>
            <h1>Get In Touch</h1>
        </section>
    )
}

export default ContactForm