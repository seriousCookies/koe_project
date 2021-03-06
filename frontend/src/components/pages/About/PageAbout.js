import React, {useState} from 'react';
import { Container, Carousel, Jumbotron} from 'react-bootstrap';
import {useSpring, animated} from 'react-spring'

function PageAbout() {
  const [index, setIndex] = useState(0);
  const props = useSpring({opacity: 1, marginTop:0, from: {opacity: 0, marginTop:-500}})
  const styles= {"background-color":"#151E3D"}

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return ( 
    
    <Container style={{minHeight: "83vh"}}>
        <br/>
        <animated.div style={props}>
            <Container style={styles} className="p-3 mb-2 text-white">
          <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item as={Container} style={{minHeight: "50vh"}}>
            <Jumbotron style={styles} className="text-center">
            <Container>
              <h1>About Us</h1>
              <hr class="my-4"></hr>
              <p class="lead">
              Kø is our solution to your problem.
              </p>
            </Container>
            </Jumbotron>
          </Carousel.Item>
          <Carousel.Item style={{minHeight: "50vh"}}>
          <Jumbotron style={styles} className="text-center">
            <Container>
              <h1>MONITOR OCCUPANT DENSITY</h1>
              <h2>COVID 19 SAFETY</h2>
              <hr class="my-4"></hr>
              <p>
              Ensure optimal crowd management and social distancing in your establishment, thanks to our
                advanced livestream feed
              </p>
            </Container>
          </Jumbotron>
          </Carousel.Item>
          <Carousel.Item style={{minHeight: "50vh"}}>
          <Jumbotron style={styles} className="text-center">
            <Container>
            <h1>Our Team</h1>
              <hr class="my-4"></hr>
              <p class="lead">
              We are the cyberducks.
              </p>
            </Container>
          </Jumbotron>
          </Carousel.Item>
        </Carousel>
          </Container>

        </animated.div>
    </Container>
  );
}

export default PageAbout;
