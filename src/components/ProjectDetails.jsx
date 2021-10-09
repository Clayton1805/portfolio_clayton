/* eslint-disable react/jsx-indent */
import { useState } from 'react';
import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import rightArrow from '../images/rightArrow.png';
import github from '../images/github-sign.png';
import arrowLink from '../images/arrowLink.png';
import XImage from '../images/X.png';

const Div100porcento = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  /* opacity: 0.5; */
  background-color: rgba(0,0,0,.125);
  position: fixed;
  top: 0px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerProjectDetailsCss = styled(SimpleBar)`
  position: absolute;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  outline: none;
  .simplebar-content-wrapper:focus {
    outline: none;
  }
  padding: 2px;
  margin: 2px;
  text-align: justify;
  @media (min-width: 800px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    width: 98%;
  }
  height: 98%;
`;

const ContainerCarrosselCss = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ImgCarrosselCss = styled.img`
  width: 100%;
  max-width: 800px;
`;

const ContainerArrowCarrosselCss = styled.div`
  position: absolute;
  left: ${({ left }) => ((left) ? '4px' : 'auto')};
  right: ${({ right }) => ((right) ? '4px' : 'auto')};
  top: 50%;
  img {
    cursor: pointer;
  }
`;

const ImgArrowLeftCss = styled.img`
  transform: scaleX(-1);
`;

const ContainerTechnologiesCss = styled.div`
  display: flex;
`;

const ContainerLanguagesAndLibsCss = styled.div`
  margin: 4px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContainerImgsTechnogiesCss = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImgTechnologiesCss = styled.img`
  border-radius: 3px;
  margin: 3px;
`;

const ContainerContentCss = styled.div`
  margin: 0px 8px;
`;

const ImageXCss = styled.img`
  position: absolute;
  left: 7px;
  top: 7px;
  cursor: pointer;
  z-index: 200;
  width: 28px;
`;

const Link = styled.a`
  margin: 5px;
`;

function ProjectDetails({
  project,
  setProjectDetails,
}) {
  const {
    displayName,
    summary,
    description,
    images,
    languages,
    libraries,
    githubUrl,
    url,
  } = project;

  const [carrosselPosition, setCarrosselPosition] = useState(0);

  const imagesRange = (n) => {
    const imgLength = images.length - 1;
    if (n > imgLength) return 0;
    if (n < 0) return imgLength;
    return n;
  };

  const carrosselChangePosition = (name) => {
    let position = 0;
    if (name === 'left') position = imagesRange(carrosselPosition - 1);
    if (name === 'right') position = imagesRange(carrosselPosition + 1);
    setCarrosselPosition(position);
  };

  return (
    <Div100porcento onClick={(e) => {
      if (e.currentTarget === e.target) {
        setProjectDetails(false);
      }
    }}
    >
      <ContainerProjectDetailsCss>
        <ImageXCss onClick={() => setProjectDetails(false)} src={XImage} alt="close" />
        <ContainerCarrosselCss>
          {images.length > 1 && (
            <>
              <ContainerArrowCarrosselCss left>
                <ImgArrowLeftCss
                  src={rightArrow}
                  onClick={() => carrosselChangePosition('left')}
                  alt="seta para esquerda"
                  aria-hidden
                />
              </ContainerArrowCarrosselCss>
              <ContainerArrowCarrosselCss right>
                <img
                  src={rightArrow}
                  onClick={() => carrosselChangePosition('right')}
                  alt="seta para esquerda direita"
                  aria-hidden
                />
              </ContainerArrowCarrosselCss>
            </>
          )}
          <ImgCarrosselCss
            src={images[carrosselPosition].resolutions.desktop.url}
            alt="images project"
          />
        </ContainerCarrosselCss>

        <ContainerContentCss>

          <h1>{displayName}</h1>

          <Link
            href={githubUrl}
            target="_ blank"
          >
            <img src={github} alt="github link" />
          </Link>
          {url && (
            <Link
              href={url}
              target="_ blank"
            >
              <img src={arrowLink} alt="github link" />
            </Link>
          )}

          {summary && (
            <>
              <h2>Resumo</h2>
              <p>{summary}</p>
            </>
          )}

          <ContainerTechnologiesCss>
            {languages.length > 0 && (
              <ContainerLanguagesAndLibsCss>
                <h3>Linguagens</h3>
                <ContainerImgsTechnogiesCss>
                  {languages.map((language) => (
                    <ImgTechnologiesCss
                      key={language}
                      src={`https://img.shields.io/badge/-${language}-A9A9A9?logo=${language}&logoColor=ffffff`}
                      alt="images project"
                    />
                  ))}
                </ContainerImgsTechnogiesCss>
              </ContainerLanguagesAndLibsCss>
            )}
            {libraries.length > 0 && (
              <ContainerLanguagesAndLibsCss>
                <h3>Bibliotecas</h3>
                <div>
                  {libraries.map((librarie) => (
                    <ImgTechnologiesCss
                      key={librarie}
                      src={`https://img.shields.io/badge/-${librarie}-A9A9A9?logo=${librarie}&logoColor=ffffff`}
                      alt="images project"
                    />
                  ))}
                </div>
              </ContainerLanguagesAndLibsCss>
            )}
          </ContainerTechnologiesCss>
          {description && (
            <>
              <h2>Detalhes do Projeto</h2>
              <p>{description}</p>
            </>
          )}
        </ContainerContentCss>
      </ContainerProjectDetailsCss>
    </Div100porcento>
  );
}

export default ProjectDetails;
