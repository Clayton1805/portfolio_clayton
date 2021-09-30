import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ImageVideo, width, borderRadius } from './ImageVideo';

const BodyCardProjectCss = styled.div`
  width: ${width};
  border-radius: ${borderRadius};
  border: 1px solid black;
  margin: 5px;
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

function CardProject({
  project: {
    name,
    roles,
    images,
  },
}) {
  const history = useHistory();
  const { id: idRoute } = useParams();
  const [visibleVideo, setVisibleVideo] = useState(false);
  const [detailsProject, setDetailsProject] = useState(false);

  useEffect(() => {
    if (detailsProject) history.push(`/portfolio/${name}`);
    else history.push('/portfolio');
  }, [detailsProject]);

  useEffect(() => (idRoute && (idRoute === name)) && setDetailsProject(true), []);

  return (
    <>
      {detailsProject && (
        <Div100porcento>
          <h1>{name}</h1>
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
        { roles === '1' && (
          <ImageVideo
            img={images[0].resolutions.mobile.url}
            video={images[1].resolutions.mobile.url}
            isVisibleVideo={visibleVideo}
          />
        )}
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
