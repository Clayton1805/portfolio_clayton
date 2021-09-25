/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import BodyHeader from '../components/Header';

function TalkToMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_chr2x1b', 'template_ozn033n', form.current, 'user_bEJlgdvwBdj1xIia2wuiT')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <BodyHeader>
      <div>
        <h1>FALE COMIGO</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </BodyHeader>
  );
}

export default TalkToMe;
