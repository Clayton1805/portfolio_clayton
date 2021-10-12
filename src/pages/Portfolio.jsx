import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import styled from 'styled-components';
import CardProject from '../components/CardProject';
import BodyHeader from '../components/Header';
import { PortfolioContext } from '../context/PortfolioContext';

const Div1Css = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

`;

function Portfolio() {
  const {
    gitConnected,
  } = useContext(PortfolioContext);

  return (
    <BodyHeader imageClayton redes>

      {gitConnected && (
      <Div1Css
        variants={{
          visible: {
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {gitConnected.projects
          .map((project) => (
            <CardProject key={project.name} project={project} />
          ))}
      </Div1Css>
      )}
    </BodyHeader>
  );
}

export default Portfolio;
