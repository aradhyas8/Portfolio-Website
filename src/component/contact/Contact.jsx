import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2l57vxo', 'template_ovsx2gj', form.current, 'ZlVndWWHuLonKnLHK')
     e.target.rest()
  };

  return (
    <>
      <section id='contact'>
      <div className='h5-container'>
        <h5>/chat ━━━━━━━</h5>
      </div>

        <div className="container contact__container">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name = 'name' placeholder = 'Your Full Name' required />
            <input type="email" name = 'email' placeholder = 'Your Email' required />
            <textarea name="message" rows="7" placeholder = 'Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>

      <div className="footer">
        <p> Designed and Built by Aradhya.</p>
      </div>
    </>
  )
}
export default Contact
