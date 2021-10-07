/* eslint-disable import/no-cycle */
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { ContainerFlexWrapCss } from '../pages/About';
// import linkedin from '../images/linkedin.png';
// import gitHub from '../images/gitHub.png';

const heightPx = 70;
const borderPx = 1;

const HeaderContainerCss = styled.header`
  height: ${heightPx}px;
  border-bottom: ${borderPx}px solid rgba(0,0,0,.125);
  align-items: center;
  align-content: center;
  background-color: #1261A0 ;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  border-radius: 0px 0px 5px 5px;
  display: flex;
  flex-flow: row nowrap;
  /* justify-content: space-between; */
  margin: auto;
  position: fixed;
  top: 0px;
  /* right: 0px;
  left: 0px; */
  width: 100%;
  z-index: 90;
`;

const DivSpaceCss = styled.div`
  padding-top: ${heightPx + borderPx}px;
  width: 100%;
`;

const ContainerNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
`;

const ButtonNavCss = styled.button`
  background-color: transparent;
  :hover {
    outline: none;
  }
  border: 0px;
  ${({ select }) => select && `
  border-bottom: 4px solid rgba(0,0,0,0.2);
  border-top: 4px solid rgba(0,0,0,0.2);
  `}
  padding: 8px 10px;
  margin: 0px 7px;
  font-size: 1.5rem;
  color: rgb(248, 249, 250);
`;

function BodyHeader({ children }) {
  const history = useHistory();
  const location = useLocation();
  const ola = location.pathname.split('/')[1];
  console.log('location', ola);
  return (
    <DivSpaceCss>
      <HeaderContainerCss>
        <ContainerFlexWrapCss>
          {/* <ImgCss size={40} /> */}
          {/* <a href="https://www.linkedin.com/in/claytonmiguel/" target="_ blank">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/Clayton1805" target="_ blank">
            <img src={gitHub} alt="gitHub" />
          </a> */}
        </ContainerFlexWrapCss>
        <ContainerNav>
          <ButtonNavCss
            select={ola === 'apresentacao'}
            onClick={() => history.push('/apresentacao')}
            type="button"
          >
            Apresentação
          </ButtonNavCss>
          <ButtonNavCss
            select={ola === 'portfolio'}
            onClick={() => history.push('/portfolio')}
            type="button"
          >
            Portfolio
          </ButtonNavCss>
          <ButtonNavCss
            select={ola === 'faleComigo'}
            onClick={() => history.push('/faleComigo')}
            type="button"
          >
            Fale comigo
          </ButtonNavCss>
        </ContainerNav>
      </HeaderContainerCss>
      {children}
    </DivSpaceCss>
  );
}

export default BodyHeader;
