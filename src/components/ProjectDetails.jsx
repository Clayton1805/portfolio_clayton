/* eslint-disable react/jsx-indent */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import { useHistory } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// import { SuspenseImg } from '../hooks/imageSuspense';

import rightArrow from '../images/rightArrow.png';
import github from '../images/github-sign.png';
import arrowLink from '../images/arrowLink.png';
import XImage from '../images/X.png';
import defaultImg from '../images/defaultImg.jpg';

import 'simplebar-react/dist/simplebar.min.css';
import { colorsTechnology } from '../utius/colorsTechnology';

const Div100porcento = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: rgba(0,0,0,.125);
  position: fixed;
  top: 0px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerProjectDetailsCss = styled(motion.div)`
  position: absolute;
  border: 1px solid black;
  border-radius: 5px;
  background-color: rgb(248, 249, 250);
  /* padding: 0px 1px 0px 1px; */
  margin: 2px;
  text-align: justify;
  @media (min-width: 800px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    width: 98.5%;
  }
  height: 98.8%;
`;

const SimpleBarCss = styled(SimpleBar)`
  border-radius: 5px;
  outline: none;
  .simplebar-content-wrapper:focus {
    outline: none;
  }
  /* padding: 0px 1px 0px 1px; */
  margin: 0px;
  width: 100%;
  height: 100%;
`;

const ContainerCarrosselCss = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ContainerArrowCarrosselCss = styled.div`
  position: absolute;
  left: ${({ left }) => ((left) ? '4px' : 'auto')};
  right: ${({ right }) => ((right) ? '4px' : 'auto')};
  top: 50%;
  img {
    cursor: pointer;
  }
  z-index: 200;
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

const ContainerNmaAndLinksCss = styled.a`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2px;
  a {
    padding: 5px;
  }
`;

const ImgCarrosselCss = styled(motion.img)`
  width: 100%;
  max-width: 800px;
  position: absolute;
  z-index: 150;
  @media (max-width: 908px) {
    border-radius: 4px 4px 0px 0px;
  }
`;

const SCss = styled.div`
  /* width: 100%; */
  /* max-width: 800px; */
  padding-top: 62.5%;
  /* background-color: rgb(0, 0, 0, 0.5); */
`;

const CCss = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
`;

const SpanNumberPhotoCss = styled.span`
  position: absolute;
  left: 1px;
  bottom: 1px;
  z-index: 200;
  color: ${({ theme }) => theme.colors.title};
`;

function ProjectDetails({
  project,
}) {
  const history = useHistory();
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
  const [directionArrow, setDirectionArrow] = useState({ direction: 'right', count: 0 });

  const imagesRange = (n) => {
    const imgLength = images.length - 1;
    if (n > imgLength) return 0;
    if (n < 0) return imgLength;
    return n;
  };

  const carrosselChangePosition = () => {
    console.log('oi pp');
    let position = 0;
    if (directionArrow.direction === 'left') position = imagesRange(carrosselPosition - 1);
    if (directionArrow.direction === 'right') position = imagesRange(carrosselPosition + 1);
    setCarrosselPosition(position);
  };

  const updateDirection = (direction) => {
    setDirectionArrow(({ count }) => ({ count: (count + 1), direction }));
  };

  useEffect(() => {
    if (directionArrow.count !== 0) carrosselChangePosition();
  }, [directionArrow]);

  const isDirectionLeft = directionArrow.direction === 'left';

  return (
    <Div100porcento onClick={(e) => {
      if (e.currentTarget === e.target) {
        history.push('/portfolio');
      }
    }}
    >
      {/* hidden={{ scale: 0, opacity: 0 }}
      visible={{
        scale: 1,
        opacity: 1,
      }}
      variants={{
        hidden: { scale: 0.5, opacity: 0.8 },
        visible: {
          scale: 1,
          opacity: 1,
        },
      }}
      transition={{ duration: 0.15 }} */}
      {/* <Suspense fallback={<></>}> */}
        <ContainerProjectDetailsCss
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.22, delay: 0.2 }}
        >
          <SimpleBarCss>
            <ImageXCss onClick={() => history.push('/portfolio')} src={XImage} alt="close" />
            <ContainerCarrosselCss>
              {images.length > 1 && (
                <>
                  <ContainerArrowCarrosselCss left>
                    <ImgArrowLeftCss
                      src={rightArrow}
                      onClick={() => updateDirection('left')}
                      alt="seta para esquerda"
                      aria-hidden
                    />
                  </ContainerArrowCarrosselCss>
                  <ContainerArrowCarrosselCss right>
                    <img
                      src={rightArrow}
                      onClick={() => updateDirection('right')}
                      alt="seta para esquerda direita"
                      aria-hidden
                    />
                  </ContainerArrowCarrosselCss>
                  <SpanNumberPhotoCss>{`${carrosselPosition + 1}/${images.length}`}</SpanNumberPhotoCss>
                </>
              )}
              <AnimatePresence>
                <ImgCarrosselCss
                  key={carrosselPosition}
                  src={
                    images.length === 0
                      ? defaultImg
                      : images[carrosselPosition].resolutions.desktop.url
                  }
                  alt="images project"
                  // animate={{ x: 20 }}
                  exit={{ opacity: 0, x: (isDirectionLeft ? '-80vw' : '80vw') }}
                  initial={{ opacity: 1, x: (isDirectionLeft ? '99vw' : '-99vw') }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  // hidden: { y: 20, opacity: 0 },
                  //   visible: {
                  //     y: 0,
                  //     opacity: 1,
                  //   },
                />
              </AnimatePresence>
              <CCss>
                <SCss />
              </CCss>
            </ContainerCarrosselCss>

            <ContainerContentCss>

              <ContainerNmaAndLinksCss>
                <h1>{displayName}</h1>
                <div>
                  <a
                    href={githubUrl}
                    target="_ blank"
                  >
                    <img src={github} alt="github link" />
                  </a>
                  {url && (
                    <a
                      href={url}
                      target="_ blank"
                    >
                      <img src={arrowLink} alt="github link" />
                    </a>
                  )}
                </div>
              </ContainerNmaAndLinksCss>

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
                          src={`https://img.shields.io/badge/-${language}-${colorsTechnology(language)}?logo=${language}&logoColor=ffffff`}
                          alt="images project"
                        />
                      ))}
                    </ContainerImgsTechnogiesCss>
                  </ContainerLanguagesAndLibsCss>
                )}
                {libraries.length > 0 && (
                  <ContainerLanguagesAndLibsCss>
                    <h3>Bibliotecas</h3>
                    <ContainerImgsTechnogiesCss>
                      {libraries.map((librarie) => (
                        <ImgTechnologiesCss
                          key={librarie}
                          src={`https://img.shields.io/badge/-${librarie}-${colorsTechnology(librarie)}?logo=${librarie}&logoColor=ffffff`}
                          alt="images project"
                        />
                      ))}
                    </ContainerImgsTechnogiesCss>
                  </ContainerLanguagesAndLibsCss>
                )}
              </ContainerTechnologiesCss>
              {description && (
                <>
                  <h2>Detalhes do Projeto</h2>
                  <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
                </>
              )}
            </ContainerContentCss>
          </SimpleBarCss>
        </ContainerProjectDetailsCss>
      {/* </Suspense> */}
    </Div100porcento>
  );
}

export default ProjectDetails;
