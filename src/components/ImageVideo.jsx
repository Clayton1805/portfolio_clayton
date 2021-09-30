import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

// const x = 3.5;
const height = `${225}px`;
const width = `${400}px`;
export const borderRadius = `${3}px`;

const GifCss = styled(motion.img)`
  width: 100%;
  /* height: ${height}; */
  border-radius: ${borderRadius};
  position: absolute;
  left: 0;
  z-index: 50;
`;

const ImgCss = styled(motion.img)`
  width: 100%;
  /* height: ${height}; */
  /* background-repeat: no-repeat;
  background-position: center;
  background-size: ${width} ${height};
  background-image: url(${({ img }) => img}); */
  border-radius: ${borderRadius};
`;

const DivCss = styled.div`
  position: relative;
  width: 100%;
`;

export const ImageVideo = ({ isVisibleVideo, img, video }) => (
  <DivCss>
    <ImgCss src={img} />
    <AnimatePresence>
      {isVisibleVideo && (
      <GifCss
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
  </DivCss>
);
