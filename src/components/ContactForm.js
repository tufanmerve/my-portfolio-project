import React, { useState } from 'react'

export const ContactForm = () => {
    const formItems = {
       firstName:"",
       lastName:"",
       email:"",
       phone: "",
       message:"",
    }


    const [form,setForm] =useState(formItems);

    
  return (
    <div>ContactForm</div>
  )
}

