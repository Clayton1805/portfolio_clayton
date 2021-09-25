/* eslint-disable import/no-cycle */
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { ImgCss, ContainerFlexWrapCss } from '../pages/About';
import linkedin from '../images/linkedin.png';
import gitHub from '../images/gitHub.png';

const heightPx = 70;
const borderPx = 2;

const HeaderContainerCss = styled.div`
  height: ${heightPx}px;
  border-bottom: ${borderPx}px solid black;
  align-items: center;
  align-content: center;
  background-color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: auto;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 90;
`;

const DivSpaceCss = styled.div`
  margin-top: ${heightPx + borderPx}px;
`;

function BodyHeader({ children }) {
  const history = useHistory();
  return (
    <DivSpaceCss>
      <HeaderContainerCss>
        <ContainerFlexWrapCss>
          <ImgCss size={40} />
          <a href="https://www.linkedin.com/in/claytonmiguel/" target="_ blank">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/Clayton1805" target="_ blank">
            <img src={gitHub} alt="gitHub" />
          </a>
        </ContainerFlexWrapCss>
        <div>
          <button onClick={() => history.push('/apresentacao')} type="button">Apresentação</button>
          <button onClick={() => history.push('/portfolio')} type="button">portfolio</button>
          <button onClick={() => history.push('/faleComigo')} type="button">Fale comigo</button>
        </div>
      </HeaderContainerCss>
      {children}
    </DivSpaceCss>
  );
}

export default BodyHeader;
