/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import BodyHeader from '../components/Header';
import { ImgCss } from './About';
import { PortfolioContext } from '../context/PortfolioContext';

import gmail from '../images/gmail.png';
// import gitHub from '../images/gitHub.png';
import whatsapp from '../images/whatsapp.png';

const FormFlexColumnCss = styled(motion.form)`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  /* width: 100%; */
  min-width: 300px;
  flex-grow: 1;
  /* padding: 10px; */
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
  width: 100%;
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
  width: 100%;
  resize: none;
  :focus {
    outline: none;
  }
`;

const InputButtonCss = styled.button`
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

const DivCss = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;

const ContainerSpaceCss = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px;
  min-width: 300px;
  p {
    margin: 5px;
  }
  h4 {
    margin: 10px;
    padding-bottom: 20px;
  }
`;

const ContainerColumCss = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerImgH1Css = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-left: 0px;
  }
  h1 {
    text-align: center;
  }
`;

const ContainerRedesCss = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  p {
    flex-grow: 1;
  }
`;

const DivRedesCss = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  flex-grow: 4;
  padding: 10px 0px;
  a {
    margin: 4px 20px 4px 0px;
  }
`;

function TalkToMe() {
  const {
    gitConnected,
  } = useContext(PortfolioContext);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let pai = true;
    const formChildren = form.current.children;
    for (let i = 0; i < formChildren.length; i += 1) {
      const element = formChildren[i];
      const { nodeName } = element;
      if ((nodeName === 'INPUT' || nodeName === 'TEXTAREA') && element.value === '') {
        pai = false;
      }
    }
    // console.log('pai', pai);
    if (pai) {
      emailjs.sendForm('service_chr2x1b', 'template_ozn033n', form.current, 'user_bEJlgdvwBdj1xIia2wuiT')
        .then((result) => {
          console.log(result.text);
          e.target.reset();
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  const container = () => {
    const {
      profiles,
    } = gitConnected.basics;
    return (
      <DivCss>
        <ContainerSpaceCss>
          <ContainerColumCss>
            <ContainerImgH1Css>
              <ImgCss
                layoutId="clayton"
                src={gitConnected.basics.image}
                size={100}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: {
                    zIndex: 101,
                  },
                  visible: {
                    zIndex: 'auto',
                    opacity: 1,
                    transition: {
                      zIndex: {
                        delay: 0.4,
                      },
                    },
                  },
                }}
              />
              <h1>Gostou do que viu?</h1>
            </ContainerImgH1Css>
            <div />
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Me envie uma mensagem preenchendo o formulário a seguir
            </motion.h4>
            <ContainerRedesCss
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p>Se quiser me contactar de outras formas aqui estão minhas redes:</p>
              <p style={{ display: 'none' }}>{profiles[0].url}</p>
              <DivRedesCss>
                <table>
                  <tr>
                    <td>
                      <a
                        href="mailto:claytonmiguel1805@gmail.com"
                        target="_ blank"
                      >
                        <img src={gmail} alt="gmail" />
                      </a>
                    </td>
                    <td><label>claytonmiguel1805@gmail.com</label></td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td style={{ paddingTop: 10 }}>
                      <a href="https://api.whatsapp.com/send?phone=551299670-4906" target="_ blank">
                        <img src={whatsapp} alt="whatsapp" />
                      </a>
                    </td>
                    <td style={{ paddingTop: 10 }}><label>+55 12996704906</label></td>
                  </tr>
                </table>
                {/* <label>
                  <a
                    href="mailto:claytonmiguel1805@gmail.com"
                    target="_ blank"
                  >
                    <img src={gmail} alt="gmail" />
                  </a>
                  claytonmiguel1805@gmail.com
                </label>
                <label>
                  <a href="https://api.whatsapp.com/send?phone=551299670-4906" target="_ blank">
                    <img src={whatsapp} alt="whatsapp" />
                  </a>
                  +55 12996704906
                </label> */}
              </DivRedesCss>
            </ContainerRedesCss>
          </ContainerColumCss>
        </ContainerSpaceCss>
        <ContainerSpaceCss>
          <FormFlexColumnCss
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
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
            <InputButtonCss type="submit" value="Enviar">Enviar</InputButtonCss>
          </FormFlexColumnCss>
        </ContainerSpaceCss>
      </DivCss>
    );
  };

  return (
    <BodyHeader>
      {gitConnected && container()}
    </BodyHeader>
  );
}

export default TalkToMe;
