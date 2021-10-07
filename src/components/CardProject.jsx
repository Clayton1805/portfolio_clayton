/* eslint-disable react/jsx-indent */
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ImageVideo, borderRadius, Img2Css } from './ImageVideo';
import ProjectDetails from './ProjectDetails';

// const width = `${400}px`;

const BodyCardProjectCss = styled.div`
  width: 100%;
  border-radius: ${borderRadius};
  border: 1px solid rgba(0,0,0,.125);
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  cursor: pointer;
  :hover {
    border: 1px solid rgba(0,0,0,.125);
  }
`;

const DivWidthCss = styled.div`
  margin: 8px 0px;
  padding: 0px 8px;
  @media (min-width: ${751}px) {
    min-width: 360px;
    width: 40%;
  }
  @media (max-width: ${751}px) {
    width: 100%;
  }
`;

const ContainerTextCardCss = styled.div`
  margin: 8px;
  text-align: justify;
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
  } = project;
  const history = useHistory();
  const { id: idRoute } = useParams();
  const [visibleVideo, setVisibleVideo] = useState(false);
  const [projectDetails, setProjectDetails] = useState(false);

  useEffect(() => {
    if (projectDetails) history.push(`/portfolio/${name}`);
    else history.push('/portfolio');
  }, [projectDetails]);

  useEffect(() => (idRoute && (idRoute === name)) && setProjectDetails(true), []);

  const imagesSwitch = () => {
    switch (true) {
      case images.length === 0:
        return (
          <Img2Css
            src="https://project-images.gitconnectedcontent.com/f985bf1e-df9e-4ade-8f0e-93d0402974be-mobile"
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
      {projectDetails && (
        <ProjectDetails project={project} setProjectDetails={setProjectDetails} />
      )}
      <DivWidthCss>
        <BodyCardProjectCss
          onMouseEnter={() => setVisibleVideo(true)}
          onMouseLeave={() => setVisibleVideo(false)}
          onClick={() => setProjectDetails(true)}
        >
          {imagesSwitch()}
          <ContainerTextCardCss>
            <h2>{displayName}</h2>
            <p>{summary}</p>
          </ContainerTextCardCss>
        </BodyCardProjectCss>
      </DivWidthCss>
    </>
  );
}

export default CardProject;
