/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
import { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import video1 from '../images/ola3.mp4';
import img1 from '../images/ola.png';
// import video1 from '../images/JAMBONBON.gif';

const x = 3.5;
const height = 768 / x;
const width = 1366 / x;

const ImgYouTube = styled(motion.video)`
  width: ${width}px;
  height: ${height}px;
`;
const DDD = styled(motion.div)`
  width: ${width}px;
  height: ${height}px;
  background-repeat: no-repeat;
  background-size: ${width}px ${height}px;
  background-image: url(${({ img }) => img});
`;
// "https://i.stack.imgur.com/ATB3o.gif"
const MyComponent = ({ isVisible, img, video }) => (
  <DDD img={img}>
    <AnimatePresence>
      {isVisible && (
      <ImgYouTube
        autoPlay
        loop
        muted
        playsInline
        key={video}
        src={video}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </ImgYouTube>
      )}
    </AnimatePresence>
  </DDD>
);

/* border: ${(prop) => (prop.ola ? 10 : 0)}px ridge rgb(4, 99, 23); */
/* display: ${(prop) => (prop.ola ? 'none' : 'inline')}; */
/* border-width: 10px; */

function Home() {
  const [pai, setPai] = useState(false);
  return (
    <div>
      <header>oi</header>
      <div>apresentação</div>
      <div>
        <div>
          <div
            onMouseEnter={() => setPai(true)}
            onMouseLeave={() => setPai(false)}
            style={{ display: 'flex', flexWrap: 'wrap' }}
          >
            <div>
              <MyComponent isVisible={pai} img={img1} video={video1} />
              {/* <DDD>
              <MyComponent isVisible={pai} />
            </DDD> */}
              {/* <video width="320" height="240" autoPlay>
              <source src={img2} type="video/mp4" />
              Your browser does not support the video tag.
              </video> */}
            </div>
            legenda
          </div>
          <div>
            <h2>titulo</h2>
            descrição do projeto
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
