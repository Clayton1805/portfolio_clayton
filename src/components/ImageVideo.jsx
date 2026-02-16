import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

export const borderRadius = `${3}px`;

const GifCss = styled(motion.img)`
  width: 100%;
  border-radius: ${borderRadius};
  position: absolute;
  left: 0;
  z-index: 50;
`;

export const Img2Css = styled(motion.img)`
  width: 100%;
  border-radius: ${borderRadius};
`;

const DivCss = styled.div`
  position: relative;
  width: 100%;
`;

export const ImageVideo = ({
  isVisibleVideo, img, video,
}) => (
  <DivCss>
    <Img2Css src={img} />
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
