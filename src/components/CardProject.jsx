/* eslint-disable react/jsx-indent */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { colorsTechnology } from '../utius/colorsTechnology';
import { ImageVideo, borderRadius, Img2Css } from './ImageVideo';
import ProjectDetails from './ProjectDetails';

import defaultImg from '../images/defaultImg.jpg';
import defaultGif from '../images/defaultGif.gif';

// const width = `${400}px`;

const BodyCardProjectCss = styled(motion.div)`
  width: 100%;
  border-radius: ${borderRadius};
  border: 1px solid rgba(0,0,0,.125);
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  cursor: pointer;
  :hover {
    border: 1px solid rgba(0,0,0,.135);
  }
`;

const DivWidthCss = styled(motion.div)`
  margin: 8px 0px;
  padding: 0px 8px;
  @media (min-width: ${766}px) {
    min-width: 360px;
    width: 40%;
  }
  @media (max-width: ${766}px) {
    width: 100%;
  }
`;

const ContainerTextCardCss = styled.div`
  margin: 8px;
  text-align: justify;
`;

const LinkCss = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const ContainerTecImgCss = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImgTechnologiesCss = styled.img`
  border-radius: 3px;
  margin: 3px 6px 3px 0px;
`;

function CardProject({
  project,
}) {
  const {
    name,
    roles,
    images,
    summary,
    displayName,
    languages,
    libraries,
  } = project;
  // const history = useHistory();
  const { id: idRoute } = useParams();
  const [visibleVideo, setVisibleVideo] = useState(false);
  // const [projectDetails, setProjectDetails] = useState(false);

  // useEffect(() => {
  //   if (projectDetails) history.push(`/portfolio/${name}`);
  //   else history.push('/portfolio');
  // }, [projectDetails]);

  // useEffect(() => (idRoute && (idRoute === name)) && setProjectDetails(true), []);

  const imagesSwitch = () => {
    switch (true) {
      case images.length === 0:
        return (
          <ImageVideo
            img={defaultImg}
            video={defaultGif}
            isVisibleVideo={visibleVideo}
          />
        );
      case images.length !== 0 && roles === '1':
        return (
          <ImageVideo
            img={images[0].resolutions.mobile.url}
            video={images[1].resolutions.mobile.url}
            isVisibleVideo={visibleVideo}
          />
        );
      default:
        return (<Img2Css src={images[0].resolutions.mobile.url} />);
    }
  };

  return (
    <>
      {(idRoute === name) && (
        <ProjectDetails project={project} />
      )}
      <DivWidthCss
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
        key={name}
      >
        <LinkCss to={`/portfolio/${name}`}>
          <BodyCardProjectCss
            onMouseEnter={() => setVisibleVideo(true)}
            onMouseLeave={() => setVisibleVideo(false)}
            whileHover={{ scale: 1.02 }}
          >
            {imagesSwitch()}
            <ContainerTextCardCss>
              <h2>{displayName}</h2>
              <ContainerTecImgCss>
                {[...libraries, ...languages].map((language) => (
                  <ImgTechnologiesCss
                    key={language}
                    src={`https://img.shields.io/badge/-${language}-${colorsTechnology(language)}?logo=${language}&logoColor=ffffff`}
                    alt="images project"
                  />
                ))}
              </ContainerTecImgCss>
              <p>{summary}</p>
            </ContainerTextCardCss>
          </BodyCardProjectCss>
        </LinkCss>
      </DivWidthCss>
    </>
  );
}

export default CardProject;
