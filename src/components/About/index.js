import React from 'react'

const About = () => {
  return (
    <div class="jumbotron">
      <h1 class="display-4">Riley Beach</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4"></hr>
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

      <button type="button" class="btn">
        <i class="fab fa-github fa-7x"></i>
      </button>
      <button type="button" class="btn">
        <i class="fab fa-linkedin fa-7x"></i>
      </button>
      <button type="button" class="btn">
        <i class="fab fa-stack-overflow fa-7x"></i>
      </button>

    </div >
  );
}

export default About;