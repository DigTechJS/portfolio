import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './skills.css'
import {Row, Col, Container} from 'react-bootstrap'
import meter1 from '../../assets/img/meter1.svg'
import meter2 from '../../assets/img/meter2.svg'
import meter3 from '../../assets/img/meter3.svg'
import meter4 from '../../assets/img/meter4.svg'
import colorSharp from '../../assets/img/color-sharp.png'


export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
  }
  return (
    <section className="skill" id="skills">
      <Container className="skill-container">
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>I have acquired technical skills and soft skills with time.</p>
              <div className="skill-bx2">
                  <h4>Technical Skills</h4>
                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                  <div className="item">
                    {/* <img src={meter1} alt="" /> */}
                    <h5>C++</h5>
                  </div>
                  <div className="item">
                    {/* <img src={meter2} alt="" /> */}
                    <h5>React</h5>
                  </div>
                  <div className="item">
                    {/* <img src={meter3} alt="" /> */}
                    <h5>DSA</h5>
                  </div>
                  <div className="item">
                    {/* <img src={meter4} alt="" /> */}
                    <h5>SQL</h5>
                  </div>
                  <div className="item">
                    {/* <img src={meter4} alt="" /> */}
                    <h5>HTML</h5>
                  </div>
                  <div className="item">
                    {/* <img src={meter4} alt="" /> */}
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    {/* <img src={meter4} alt="" /> */}
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    {/* <img src={meter4} alt="" /> */}
                    <h5>C</h5>
                  </div>
                </Carousel>
                </div>
              
              <div className="skill-bx2">
              <h4>Soft Skills</h4>
               <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                <div className="item">
                  {/* <img src={meter1} alt="" /> */}
                  <h5>Leadership</h5>
                </div>
                <div className="item">
                  {/* <img src={meter2} alt="" /> */}
                  <h5>Communi cation</h5>
                </div>
                <div className="item">
                  {/* <img src={meter3} alt="" /> */}
                  <h5>Teamwork</h5>
                </div>
                <div className="item">
                  {/* <img src={meter4} alt="" /> */}
                  <h5>Problem Solving</h5>
                </div>
                <div className="item">
                  {/* <img src={meter4} alt="" /> */}
                  <h5>Empathy</h5>
                </div>
                
              </Carousel>
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img src={colorSharp} alt="" className="background-image-left" /> */}
    </section>
  )
}

//  Skills