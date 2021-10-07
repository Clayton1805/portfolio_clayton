/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import BodyHeader from '../components/Header';

const FormFlexColumnCss = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

// const LabelCss = styled.label`
//   text-align: center;
// `;

function TalkToMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_chr2x1b', 'template_ozn033n', form.current, 'user_bEJlgdvwBdj1xIia2wuiT')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <BodyHeader>
      <div>
        <FormFlexColumnCss ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">
            Name
          </label>
          <input id="name" type="text" name="name" />
          <label htmlFor="email">
            Email
          </label>
          <input id="email" type="email" name="email" />
          <label htmlFor="message">
            Message
          </label>
          <textarea id="message" name="message" />
          <input type="submit" value="Send" />
        </FormFlexColumnCss>
      </div>
    </BodyHeader>
  );
}

export default TalkToMe;
