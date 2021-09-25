import CardProject from '../components/CardProject';
import video1 from '../images/ola3.mp4';
import img1 from '../images/ola.png';
import BodyHeader from '../components/Header';

function Portfolio() {
  return (
    <BodyHeader>
      <div>
        <CardProject img={img1} video={video1} id="cavaleiro1" />
        <CardProject img={img1} video={video1} id="cavaleiro2" />
        <CardProject img={img1} video={video1} id="cavaleiro3" />
        <CardProject img={img1} video={video1} id="cavaleiro4" />
      </div>
    </BodyHeader>
  );
}

export default Portfolio;
