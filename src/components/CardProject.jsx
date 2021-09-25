import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ImageVideo, width, borderRadius } from './ImageVideo';

const BodyCardProjectCss = styled.div`
  width: ${width};
  border-radius: ${borderRadius};
  border: 1px solid black;
`;

const Div100porcento = styled.div`
  height: 100%;
  min-width: 100%;
  opacity: 0.5;
  background-color: aqua;
  margin: auto;
  position: fixed;
  top: 0px;
  z-index: 100;
`;

function CardProject({ img, video, id }) {
  const history = useHistory();
  const { id: idRoute } = useParams();
  const [visibleVideo, setVisibleVideo] = useState(false);
  const [detailsProject, setDetailsProject] = useState(false);

  useEffect(() => {
    if (detailsProject) history.push(`/portfolio/${id}`);
    else history.push('/portfolio');
  }, [detailsProject]);

  useEffect(() => (idRoute && (idRoute === id)) && setDetailsProject(true), []);

  return (
    <>
      {detailsProject && (
        <Div100porcento>
          <h1>{id}</h1>
          <button
            type="button"
            onClick={() => {
              setDetailsProject(false);
            }}
          >
            X
          </button>
        </Div100porcento>
      )}
      <BodyCardProjectCss
        onMouseEnter={() => setVisibleVideo(true)}
        onMouseLeave={() => setVisibleVideo(false)}
        onClick={() => setDetailsProject(true)}
      >
        <ImageVideo
          img={img}
          video={video}
          isVisibleVideo={visibleVideo}
        />
        <div>
          <h2>titulo</h2>
          descrição do projeto hvdrbszdjndkfjx
          fdkvnkdkdjkn dj vj
          fbrbjnsrmvk fgbdrnrkn
          mjdrnsnfjnsngdrbnvdnfbdbnj
        </div>
      </BodyCardProjectCss>
    </>
  );
}

export default CardProject;
