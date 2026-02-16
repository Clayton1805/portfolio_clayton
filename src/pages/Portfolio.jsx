import { motion } from 'framer-motion';
import React, { useContext, useEffect } from 'react';
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
  const { gitConnected } = useContext(PortfolioContext);

  useEffect(() => window.scrollTo(0, 0), []);

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
          // transition={{ duration: 0.25 }}
          initial="hidden"
          animate="visible"
        >
          {gitConnected.projects.map((project) => {
            console.log('project', project);
            return (
              <CardProject
                key={project.name}
                project={({
                  ...project,
                  images: Object.keys(project.images).map((key) => project.images[key]) || [],
                })}
              />
            );
          })}
        </Div1Css>
      )}
    </BodyHeader>
  );
}

export default Portfolio;
