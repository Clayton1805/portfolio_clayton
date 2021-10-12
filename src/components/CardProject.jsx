/* eslint-disable react/jsx-indent */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ImageVideo, borderRadius, Img2Css } from './ImageVideo';
import ProjectDetails from './ProjectDetails';

// const width = `${400}px`;

const BodyCardProjectCss = styled.div`
  width: 100%;
  border-radius: ${borderRadius};
  border: 1px solid rgba(0,0,0,.125);
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  cursor: pointer;
  :hover {
    border: 1px solid rgba(0,0,0,.125);
  }
`;

const DivWidthCss = styled(motion.div)`
  margin: 8px 0px;
  padding: 0px 8px;
  @media (min-width: ${759}px) {
    min-width: 360px;
    width: 40%;
  }
  @media (max-width: ${759}px) {
    width: 100%;
  }
`;

const ContainerTextCardCss = styled.div`
  margin: 8px;
  text-align: justify;
`;

function CardProject({
  project,
}) {
  const {
    name,
    roles,
    images,
    summary,
    displayName,
  } = project;
  const history = useHistory();
  const { id: idRoute } = useParams();
  const [visibleVideo, setVisibleVideo] = useState(false);
  // const [projectDetails, setProjectDetails] = useState(false);

  // useEffect(() => {
  //   if (projectDetails) history.push(`/portfolio/${name}`);
  //   else history.push('/portfolio');
  // }, [projectDetails]);

  // useEffect(() => (idRoute && (idRoute === name)) && setProjectDetails(true), []);

  const imagesSwitch = () => {
    switch (true) {
      case images.length === 0:
        return (
          <ImageVideo
            img="https://lh3.googleusercontent.com/yx72MH1bhMp0prosNz74FFStjmNcZPwget_xJdq7rAzWiexUgkACnwnqNOVwAiEgjEdicbP901X5JSlrK6jcpFpLgnEZXuckQOEiQZUtxoHveYJ1KBaQcswGlet_q6vs0_AGOr7ZSYHc-XLvCwwj-XxH5SdbJV02LrCawd-x0ievhyzH7HjDvrHqbmPUmZHqxQt13b9xPTlBPIge9P66DPA7jGHI0wVOLoHpnjdavoIpcv-tO8rRZy5xzCGKqJLvEnH74rtMA-_5bb4RMjcoOaLXUOjQTh5d74qcpzKg5hLtNRfRGYrEYr2smFSsbX16Mfk0ZIxBiUigUu53mpl1fuJDWxR-L-v_AGEg3DiSbIGyhT6yctuQR57OORqpHgrkc_HYG8xSYM6kyhHCq6kqPqyhE-UufgT6GmkNnec1I32DoxkfLDr1EYFiomUmhBzHDnVjWWVQU1vKcALwqsiTnw5jY1mNJDNMX6M1nF9SUMVs1gQjB-hC9jU7LaL-6SPZz20VG5-x0348slLqyQ2xRCWysOVPkgWzcTyNnC21z6sF7udXElhzz5u_iVR-6wYLDVMROui3eqjufYbbsrTl_LE3JRHzl-f9dRR1UH6GwEmGt5Gccr1lrWxOBZFNHGPkv5MyP0yKGbGX-CMIqZQIZhhk3YPYrb5M-421EV32R_IuqrT6_eEHG36AUidP5LKLIJJNJ1ryHvgN9-fnIXR-a2io=w983-h614-no?authuser=0"
            video="https://lh3.googleusercontent.com/ZH7KB8VPgzR557Ap9qWDf8zoB2Qnrjs4QcqWYy7l3v6xvhpX9y6J6RlJkH83hvjlOOjklqlbEWVkAQiay73HqtXcDv_FXq8w0cVUdsCDswSfZ_C9NZRXCz17taxoDouci30Ta1RbNKzQziK930sooLLgErRKGEq3WNLgnhRzQCMnwfu10UwpMpVAcga9AVeI_p60zrp8FYhi54XYWKAYPZ05XYsJGC_nrx-0-v3M9gz1Q_lu7zv_w0f6T_INP9z2xVvHKD1VGblNRMo36OsbYpLKSC7a3gXXXaxVVnqfOwRYl-q_0WIjQM4n7-YNRl1zJVEnrjjYjFUpTRIufHMN6F-QOs0OUKMHbei0B74aTdyPA13vfims7pu1EB4tUsJ6u_t1fC2SgT-i_KUfmljqt5JMqVql3B2eWN8fKiekifSsRcohPWA-LCiSHI1ASr0IgApHNiKyhoJ-5yAYukFR2nkp_2P1nli8cfV5pEnzidtjph3BL-7zO-uaXDN2ngoc4AZFO5vOKSW66EzInWknKqZ_qSBAzVbBqzU-LCGBdtapzafjrLO43EIob9C9gyxHeHvzDf9OJ7L1AbCiv1OzDESOdcjUvpSSckaQhlUYhgrXkKjft9jKtUGxfVlzR43euMTTOqUiiV5JVJkjR_NRRj5JtKkg48QwizUrnortdx0himGRAXrvBu1IGlxiwY_j1LamhaK9kpylBb9uZjMujcdG=w981-h611-no?authuser=0"
            isVisibleVideo={visibleVideo}
          />
        );
      case images.length !== 0 && roles === '1':
        return (
          <ImageVideo
            img={images[0].resolutions.mobile.url}
            video={images[1].resolutions.mobile.url}
            isVisibleVideo={visibleVideo}
          />
        );
      default:
        return (<Img2Css src={images[0].resolutions.mobile.url} />);
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {(idRoute === name) && (
        <ProjectDetails project={project} />
      )}
      <DivWidthCss
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.9 }}
        // transition={{ duration: 0.3 }}
        variants={item}
        key={name}
      >
        <BodyCardProjectCss
          onMouseEnter={() => setVisibleVideo(true)}
          onMouseLeave={() => setVisibleVideo(false)}
          onClick={() => history.push(`/portfolio/${name}`)}
        >
          {imagesSwitch()}
          <ContainerTextCardCss>
            <h2>{displayName}</h2>
            <p>{summary}</p>
          </ContainerTextCardCss>
        </BodyCardProjectCss>
      </DivWidthCss>
    </>
  );
}

export default CardProject;
