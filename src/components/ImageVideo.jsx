import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

// const x = 3.5;
const height = `${225}px`;
export const width = `${360}px`;
export const borderRadius = `${3}px`;

const VideoCss = styled(motion.img)`
  width: ${width};
  height: ${height};
  border-radius: ${borderRadius};
`;

const DivImgCss = styled(motion.div)`
  width: ${width};
  height: ${height};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${width} ${height};
  background-image: url(${({ img }) => img});
  border-radius: ${borderRadius};
`;

export const ImageVideo = ({ isVisibleVideo, img, video }) => (
  <DivImgCss img={img}>
    <AnimatePresence>
      {isVisibleVideo && (
      <VideoCss
        key={video}
        src={video}
        alt={video}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
      )}
    </AnimatePresence>
  </DivImgCss>
);
