import React from 'react'
import image from '../../assets/images/me.JPG';

const About = () => {
  return (
    <div class="media mp-0 about-me">
      <div className="me"></div>
      <div class="media-body">
        <h5 class="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
    </div >
  );
}

export default About;


/*<div class="self-portrait">
        <img src={image} class=" img-fluid" alt="me"></img>
      </div>
      <div class="bio">
        <h1 class="display-4">Riley Beach</h1>
        <p class="lead">Hello, my name is Riley and I am a full stack web developer.</p>
        <hr class="my-4"></hr>
      </div>*/
