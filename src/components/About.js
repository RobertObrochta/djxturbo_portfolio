import VideoEmbed from "./VideoEmbed";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

const About = () => {
  return (
    <div className="about-section" id="About">
      <div className="videos">
        <Splide hasTrack={false}>

          <div className="videos-track">
            <SplideTrack>
              <SplideSlide>
                <VideoEmbed videoId= "ip5AMiJ-ijE"/>
              </SplideSlide>

              <SplideSlide>
                <VideoEmbed videoId= "ip5AMiJ-ijE"/>
              </SplideSlide>
            </SplideTrack>
            </div>

          <div className="splide__arrows" />
        </Splide>
      </div>
    </div>
  );
}

export default About;
