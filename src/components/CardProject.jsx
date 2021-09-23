import { useState } from 'react';
import ImageVideo from './ImageVideo';

function CardProject({ img, video }) {
  const [visibleVideo, setVisibleVideo] = useState(false);

  return (
    <div
      onMouseEnter={() => setVisibleVideo(true)}
      onMouseLeave={() => setVisibleVideo(false)}
    >
      <ImageVideo
        img={img}
        video={video}
        isVisibleVideo={visibleVideo}
      />
      <div>
        <h2>titulo</h2>
        descrição do projeto
      </div>
    </div>
  );
}

export default CardProject;
