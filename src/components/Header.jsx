/* eslint-disable import/no-cycle */
import {
  useContext, useEffect, useRef, useState,
} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { motion } from 'framer-motion';
import { PortfolioContext } from '../context/PortfolioContext';
import { ContainerFlexWrapCss, ImgCss } from '../pages/About';
import menu from '../images/menu.png';
import { useOutsideEvent } from '../hooks/useOutsideEvent';

// import linkedinHeader from '../images/linkedinHeader.png';
// import gitHub from '../images/gitHub.png';

const heightPx = 70;

const HeaderContainerCss = styled.header`
  height: ${heightPx}px;
  /* border-bottom: 1px solid rgba(0,0,0,.125); */
  align-items: center;
  align-content: center;
  background-color: #1261A0;
  box-shadow: 1px .125rem .25rem rgba(0,0,0, 0.075);
  border-radius: 0px 0px 6px 6px;
  display: flex;
  flex-flow: row nowrap;
  margin: auto;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 90;
`;

const ContainerNavMobileCss = styled.div`
  height: 100%;
  align-items: center;
  align-content: center;
  background-color: #1261A0;
  box-shadow: 1px .125rem .25rem rgba(0,0,0, 0.075);
  border: 1px solid #083050;
  border-radius: 0px 0px 6px 6px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: auto;
  position: fixed;
  top: 0px;
  right: 0px;
  /* left: 0px; */
  z-index: 85;
`;

const DivSpaceCss = styled.div`
  padding-top: ${heightPx}px;
  width: 100%;
`;

const ContainerNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
`;

const ButtonNavCss = styled(motion.button)`
  background-color: transparent;
  :hover {
    outline: none;
  }
  border: 0px;
  padding: 8px 10px;
  margin: 0px 7px;
  font-size: 1.5rem;
  color: rgb(248, 249, 250);

  ${({ select }) => select && css`
    border-bottom: 4px solid rgba(0,0,0,0.2);
    border-top: 4px solid rgba(0,0,0,0.2);
  `}
  ${({ mobile }) => mobile && css`
    width: 95%;
    margin: 15px 0px;
  `}
`;

const ImgButtonNavCss = styled.img`
  margin: 0px 10px;
  cursor: pointer;
`;

function BodyHeader({ children, imageClayton, redes }) {
  const {
    gitConnected,
  } = useContext(PortfolioContext);

  const history = useHistory();
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  const navMobile = useRef(null);
  const buttonNav = useRef(null);

  const [navbar, setNavbar] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.matchMedia('(min-width: 768px)').matches);

  useEffect(() => {
    const handler = (e) => setIsDesktop(e.matches);
    window.matchMedia('(min-width: 768px)').addListener(handler);
  }, []);

  useOutsideEvent([navMobile, buttonNav], setNavbar, false);

  const Nav = ({ mobile }) => (
    <>
      <ButtonNavCss
        mobile={mobile}
        select={path === 'apresentacao'}
        // layoutId={(path === 'apresentacao') ? 'select' : ''}
        onClick={() => history.push('/apresentacao')}
        type="button"
      >
        Apresentação
      </ButtonNavCss>
      <ButtonNavCss
        mobile={mobile}
        select={path === 'portfolio'}
        // layoutId={(path === 'portfolio') ? 'select' : ''}
        onClick={() => history.push('/portfolio')}
        type="button"
      >
        Portfolio
      </ButtonNavCss>
      <ButtonNavCss
        mobile={mobile}
        select={path === 'faleComigo'}
        // layoutId={(path === 'faleComigo') ? 'select' : ''}
        onClick={() => history.push('/faleComigo')}
        type="button"
      >
        Fale comigo
      </ButtonNavCss>
    </>
  );

  return (
    <DivSpaceCss>
      <HeaderContainerCss>
        <ContainerFlexWrapCss>
          {(gitConnected && imageClayton) && (
          <ImgCss
            layoutId="clayton"
            src={gitConnected.basics.image}
            size={40}
            // variants={
            //   {
            //     hidden: {
            //       zIndex: 200,
            //     },
            //   }
            // }
          />
          )}
          {redes && (
          <>
            {/* <a href="https://www.linkedin.com/in/claytonmiguel/" target="_ blank">
              <img src={linkedinHeader} alt="linkedin" />
            </a> */}
            {/* <a href="https://github.com/Clayton1805" target="_ blank">
              <img src={gitHub} alt="gitHub" />
            </a> */}
          </>
          )}
        </ContainerFlexWrapCss>

        <ContainerNav>
          {isDesktop
            ? (<Nav />)
            : (
              <ImgButtonNavCss
                ref={buttonNav}
                onClick={() => setNavbar(!navbar)}
                src={menu}
                alt="menu"
              />
            )}
        </ContainerNav>
      </HeaderContainerCss>
      {!isDesktop && navbar && (
        <ContainerNavMobileCss ref={navMobile}>
          <Nav mobile />
        </ContainerNavMobileCss>
      )}

      {children}
    </DivSpaceCss>
  );
}

export default BodyHeader;
