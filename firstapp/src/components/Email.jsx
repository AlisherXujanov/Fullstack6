import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

export default function Email() {
  const form = useRef()

  const submit = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID-')
      .then((result) => {
        alert('Message Sent', result.text);
        // show the user a success message
      }, (error) => {
        alert('An error occurred, Please try again', error.text);
        // show the user an error
      });

    e.target.reset(); // resets the form after submission
  }

  return (
    <div className="email-form">
      <h1>Send Email</h1>

      <form ref={form} onSubmit={(e) => submit(e)}>
        <input type="text" hidden value='напишите своё имя' name='from_name' />

        <label htmlFor="reciever_name">Reciever name</label>
        <input type="text" id="reciever_name"
          placeholder="Reciever name" name='to_name'
        />

        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" id="exampleInputEmail1"
          placeholder="Reciever email address" name='user_email'
        />
        <small id="email-help">
          We'll never share your email with anyone else.
        </small>

        <label htmlFor="exampleFormControlTextarea1">Message</label>
        <textarea id="exampleFormControlTextarea1" rows="3"
          placeholder="Enter your message here..."
          name="message"
        ></textarea>
        <small id="message-help">Text area for your message.</small>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
