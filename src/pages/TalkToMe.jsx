/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import BodyHeader from '../components/Header';

const FormFlexColumnCss = styled.form`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  /* width: 100%; */
`;

const InputTextCss = styled.input`
  border: 2px solid #1261A0;
  /* background-color: darken(0.20, #1261A0); */
  border-radius: 10px;
  font-size: 14pt;
  /* height: 30px; */
  margin: 5px 0px;
  text-align: center;
  max-width: 380px;
  width: 95%;
  :focus {
    outline: none;
  }
`;

const TextareaCss = styled.textarea`
  border: 2px solid #1261A0;
  border-radius: 10px;
  font-size: 14pt;
  height: 200px;
  margin: 5px 0px;
  max-width: 380px;
  width: 95%;
  resize: none;
  :focus {
    outline: none;
  }
`;

const InputSubmitCss = styled.input`
  border-radius: 10px;
  color: rgb(248, 249, 250);
  border: 2px solid #239223;
  background-color: #239223;
  width: 150px;
  padding: 8px 0px;
  margin: 5px 0px;
  cursor: pointer;
  :hover {
    background-color: #228B22;
  }
  :focus {
    outline: none;
  }
`;

const LabelCss = styled.label`
  font-size: 14pt;
  font-weight: 900;
  text-align: center;
`;

const Div = styled.div`
  width: 100%;
`;

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
    <BodyHeader imageClayton>
      <Div>
        <FormFlexColumnCss ref={form} onSubmit={sendEmail}>
          <LabelCss htmlFor="name">
            Nome
          </LabelCss>
          <InputTextCss
            id="name"
            placeholder="ex: Clayton Miguel Da Silva"
            type="text"
            name="name"
          />
          <LabelCss htmlFor="email">
            Email para Contato
          </LabelCss>
          <InputTextCss
            id="email"
            placeholder="ex: claytonmiguel1805@gmail.com"
            type="email"
            name="email"
          />
          <LabelCss htmlFor="message">
            Mensagem
          </LabelCss>
          <TextareaCss id="message" name="message" />
          <InputSubmitCss type="submit" value="Enviar" />
        </FormFlexColumnCss>
      </Div>
    </BodyHeader>
  );
}

export default TalkToMe;
