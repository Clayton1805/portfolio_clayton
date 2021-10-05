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

const DivWidth = styled.div`
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
      <DivWidth>
        <BodyCardProjectCss
          onMouseEnter={() => setVisibleVideo(true)}
          onMouseLeave={() => setVisibleVideo(false)}
          onClick={() => setProjectDetails(true)}
        >
        {imagesSwitch()}
          {/* { images.length === 0
            && (<Img2Css src="https://project-images.gitconnectedcontent.com/f985bf1e-df9e-4ade-8f0e-93d0402974be-mobile" />)}
          {(images.length !== 0 && roles === '1') ? (
            <ImageVideo
              img={images[0].resolutions.mobile.url}
              video={images[1].resolutions.mobile.url}
              isVisibleVideo={visibleVideo}
            />
          ) : (<Img2Css src={images[0].resolutions.mobile.url} />)} */}
            {/* : (<Img2Css src={images[0].resolutions.mobile.url} />)} */}
          <div>
            <h2>{displayName}</h2>
            <p>{summary}</p>
          </div>
        </BodyCardProjectCss>
      </DivWidth>
    </>
  );
}

export default CardProject;
