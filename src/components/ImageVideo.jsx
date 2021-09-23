import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const x = 3.5;
const height = `${768 / x}px`;
const width = `${1366 / x}px`;
const borderRadius = `${50}px`;

const Video = styled(motion.video)`
  width: ${width};
  height: ${height};
  border-radius: ${borderRadius};
`;

const DivImg = styled(motion.div)`
  width: ${width};
  height: ${height};
  background-repeat: no-repeat;
  background-size: ${width} ${height};
  background-image: url(${({ img }) => img});
  border-radius: ${borderRadius};
`;

const ImageVideo = ({
  isVisibleVideo, img, video,
}) => {
  const $video = useRef(null);
  useEffect(() => {
    if ($video.current) $video.current.playbackRate = 2;
  }, [isVisibleVideo, $video]);
  return (
    <DivImg img={img}>
      <AnimatePresence>
        {isVisibleVideo && (
        <Video
          ref={$video}
          autoPlay
          loop
          muted
          playsInline
          key={video}
          src={video}
          play
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
        )}
      </AnimatePresence>
    </DivImg>
  );
};

export default ImageVideo;
