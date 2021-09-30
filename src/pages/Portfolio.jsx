/* eslint-disable react/no-deprecated */
/* eslint-disable react/style-prop-object */
import React, { useContext } from 'react';
import styled from 'styled-components';
import CardProject from '../components/CardProject';
// import video1 from '../images/ola3.mp4';
// import img1 from '../images/ola.png';
import BodyHeader from '../components/Header';
import { PortfolioContext } from '../context/PortfolioContext';
// import Peek1 from '../images/PeekCla.gif';

// const Div1 = styled.div`
//   padding:56.25% 0 0 0;
//   position:relative;
// `;

// const Div2 = styled.div`
//   height:100%;
//   left:0;
//   position:absolute;
//   top:0;
//   width:100%;
// `;

// class YourVideo extends React.Component {
//   componentWillMount() {
//     const script1 = document.createElement('script');
//     const script2 = document.createElement('script');

//     script1.src = 'https://fast.wistia.com/embed/medias/g2xouy2h6s.jsonp';
//     script1.async = true;

//     script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
//     script2.async = true;

//     document.body.appendChild(script1);
//     document.body.appendChild(script2);
//   }

//   render() {
//     return (
//       <div>
//         <Div1 className="wistia_responsive_padding">
//           <Div2 className="wistia_responsive_wrapper">
//           </Div2>
//         </Div1>
//       </div>
//     );
//   }
// }

const Div1 = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* margin-left: 2%;
  margin-right: 2%; */
  /* @media (max-width: 400px) { */
    /* max-width: 300px !important; */
    /* margin-left: 0px;
    margin-right: 0px;
  } */
`;

// const ImagTeste = styled.img`
//   max-width: 360px;
//   /* flex-basis: 15%; */
//   /* flex-grow: 1; */
//   /* min-width: 360px; */
//   margin: 10px;
//   @media (max-width: 400px) {
//     /* max-width: 300px !important; */
//     max-width: 100% !important;
//     flex-grow: 1;
//     /* margin: 0px; */
//   }
// `;
// {/* <ImagTeste src="https://lh3.googleusercontent.com/pw/AM-JKLVPWuRKKrpmyy12QuWVa_XX9pRabIp64UkCKAt2QxAtlmY7RYyWZ-1oop2jXKEjXJ1Bap1C44e3UjyI_AidYPrq3blFEXLBasrPC9CbcXBvPoCS1Np1VzAJWcFUhSCPIJe9CiGCZbvwqEAew8a33f7g=w512-h288-no?authuser=0" alt="" />
// <ImagTeste src="https://lh3.googleusercontent.com/pw/AM-JKLVPWuRKKrpmyy12QuWVa_XX9pRabIp64UkCKAt2QxAtlmY7RYyWZ-1oop2jXKEjXJ1Bap1C44e3UjyI_AidYPrq3blFEXLBasrPC9CbcXBvPoCS1Np1VzAJWcFUhSCPIJe9CiGCZbvwqEAew8a33f7g=w512-h288-no?authuser=0" alt="" />
// <ImagTeste src={Peek1} alt="" />
// <ImagTeste src={Peek1} alt="" /> */}

function Portfolio() {
  const {
    gitConnected,
  } = useContext(PortfolioContext);

  return (
    <BodyHeader>
      <Div1>
        {gitConnected && gitConnected.projects
          .map((project) => <CardProject key={project.name} project={project} />)}
        {/* <CardProject img={img1} video={video1} id="cavaleiro2" />
        <CardProject img={img1} video={video1} id="cavaleiro3" />
        <CardProject img={img1} video={video1} id="cavaleiro4" /> */}
      </Div1>
    </BodyHeader>
  );
}

export default Portfolio;
