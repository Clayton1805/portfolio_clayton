/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import styled from 'styled-components';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import BodyHeader from '../components/Header';
import linkedin from '../images/linkedin.png';
import gitHub from '../images/gitHub.png';
import whatsapp from '../images/whatsapp.png';
import { PortfolioContext } from '../context/PortfolioContext';

export const ImgCss = styled(motion.img)`
  max-width: ${({ size }) => size}px;
  width: 100%;
  border-radius: 50%;
  margin: 10px;
`;

const DivRedesCss = styled.div`
  display: flex;
  flex-flow: row nowrap;
  a {
    margin: 4px 20px 4px 0px;
  }
`;

export const ContainerFlexWrapCss = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContainerFlexWrap2Css = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContainerAboutCss = styled.div`
  /* padding: 0px 5px; */
  /* white-space: pre-wrap;
  margin-right: auto;
  margin-left: auto; */
  width: 100%;
  /* max-width: 800px; */
`;

const TextSummaryCss = styled.p`
  text-align: center;
  /* margin: 4px; */
  font-size: 1rem;
  width: 100%;
  /* padding: 0px 10px; */
`;

const ContainerSumaryCss = styled.div`
  align-self: center;
  margin: 15px;
`;

const NameCss = styled.h1`
  color: #4C4C4C;
  font-size: 2.5rem;
  margin: 5px 0px;
`;

const SpanCss = styled.p`
  font-size: 1.2rem;
  margin: 5px 0px;
`;

export const About = () => {
  const {
    gitConnected,
  } = useContext(PortfolioContext);

  const container = () => {
    const {
      image,
      name,
      headline,
      profiles,
      summary,
    } = gitConnected.basics;
    return (
      <ContainerAboutCss>
        <ContainerFlexWrap2Css>
          <ImgCss
            // variants={
            //   {
            //     hidden: {
            //       zIndex: 200,
            //     },
            //   }
            // }
            layoutId="clayton"
            src={image}
            size={290}
          />
          <ContainerSumaryCss>
            <NameCss>{ name }</NameCss>
            <SpanCss>{ headline }</SpanCss>
            <DivRedesCss>
              <a
                href={
                  profiles
                    .find((profile) => profile.network === 'LinkedIn').url
                }
                target="_ blank"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a
                href={
                  profiles
                    .find((profile) => profile.network === 'GitHub').url
                }
                target="_ blank"
              >
                <img src={gitHub} alt="GitHub" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=551299670-4906" target="_ blank">
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </DivRedesCss>
          </ContainerSumaryCss>
        </ContainerFlexWrap2Css>
        {/* <TextSummaryCss dangerouslySetInnerHTML={{ __html: summary }} /> */}
        {summary.split('\n').map((text, index) => (
          <TextSummaryCss key={index}>
            {
              text.split('**').map((t, i) => ((i % 2 !== 0) ? <b key={i}>{t}</b> : t))
            }
          </TextSummaryCss>
        ))}
      </ContainerAboutCss>
    );
  };
  return (
    <BodyHeader>
      {gitConnected && container()}
    </BodyHeader>
  );
};
