/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import styled from 'styled-components';
import { useContext } from 'react';
import BodyHeader from '../components/Header';
import linkedin from '../images/linkedin.png';
import gitHub from '../images/gitHub.png';
import whatsapp from '../images/whatsapp.png';
import { PortfolioContext } from '../context/PortfolioContext';

export const ImgCss = styled.img`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  margin: 10px;
`;

const DivRedesCss = styled.div`
  display: flex;
  flex-flow: row nowrap;
  a {
    margin: 0px 10px 0px 10px;
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
  padding: 0px 5px;
  white-space: pre-wrap;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  /* max-width: 800px; */
`;

const TextSummaryCss = styled.p`
  text-align: center;
`;

const ContainerSumaryCss = styled.div`
  align-self: center;
  margin: 15px;
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
          <ImgCss src={image} size={300} />
          <ContainerSumaryCss>
            <h1>{ name }</h1>
            <p>{ headline }</p>
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
        <TextSummaryCss dangerouslySetInnerHTML={{ __html: summary }} />
      </ContainerAboutCss>
    );
  };

  return (
    <BodyHeader>
      {gitConnected && container()}
    </BodyHeader>
  );
};
