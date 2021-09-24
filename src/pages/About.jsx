/* eslint-disable max-len */
import styled from 'styled-components';
import BodyHeader from '../components/Header';
import clayton from '../images/clayton.jpg';
import linkedin from '../images/linkedin.png';
import gitHub from '../images/gitHub.png';
import whatsapp from '../images/whatsapp.png';

const heightWidth = `${300}px`;

const ImgCss = styled.div`
  width: ${heightWidth};
  height: ${heightWidth};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${400}px;
  background-image: url(${clayton});
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

const ContainerFlexWrapCss = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function About() {
  return (
    <BodyHeader>
      <ContainerFlexWrapCss>
        <ImgCss />
        <div>
          <h1>Clayton Miguel Da Silva</h1>
          <p>Desenvolvedor web full stack</p>
          <DivRedesCss>
            <a href="https://www.linkedin.com/in/claytonmiguel/" target="_ blank">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/Clayton1805" target="_ blank">
              <img src={gitHub} alt="gitHub" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=551299670-4906" target="_ blank">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </DivRedesCss>
        </div>
      </ContainerFlexWrapCss>
      <p>
        Meu nome é Rafael Ponciano, sou desenvolvedor web full stack. Possuo duas formações pela UNAMA (Universidade da Amazônia) sendo Tecnólogo em análise e desenvolvimento de sistemas e Bacharel em sistema de informação. Minha primeira experiencia de trabalho foi no BASA (Banco da Amazônia) como analista de suporte cuja função era orientar e resolver problemas de todas as agências filiais do Brasil. Posteriormente em 2017 a 2019 trabalhei com e-sport prestando serviço para empresa Blizzard (desenvolvedora de grandes jogos como World of Warcraft e Hearthstone), saindo da zona de conforto para atuar na área de comunicação. Em 2018 iniciei uma formação em Comunicação e Marketing Digital pela ESTRATEGO com a conclusão em Jun/2020. Nesse meio período optei por me dedicar inteiramente na área de tecnologia me especializando em desenvolvimento web como javascript. Iniciei o curso de formação de desenvolvedores web da Trybe em Jun/2020 onde tive segurança para trabalhar com diversas tecnologias como react, node, express, bibliotecas css, git entre outras. Procuro estar sempre atualizado com as tecnologias do mercado.
      </p>
    </BodyHeader>
  );
}

export default About;
