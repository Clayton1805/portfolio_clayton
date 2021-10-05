/* eslint-disable react/jsx-indent */
import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
// import { useRef, useEffect } from 'react';

const Div100porcento = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  /* opacity: 0.5; */
  background-color: rgba(0,0,0,.125);
  position: fixed;
  top: 0px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerProjectDetailsCss = styled(SimpleBar)`
  width: 90%;
  height: 98%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  outline: none;
  .simplebar-content-wrapper:focus {
    outline: none;
  }
  padding: 2px;
`;

function ProjectDetails({
  project,
  setProjectDetails,
}) {
  const {
    displayName,
  } = project;

  return (
    <Div100porcento onClick={(e) => {
      if (e.currentTarget === e.target) {
        setProjectDetails(false);
      }
    }}
    >
      <ContainerProjectDetailsCss>
        <button
          type="button"
          onClick={() => {
            setProjectDetails(false);
          }}
        >
          X
        </button>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
        <h1>{displayName}</h1>
      </ContainerProjectDetailsCss>
    </Div100porcento>
  );
}

export default ProjectDetails;
