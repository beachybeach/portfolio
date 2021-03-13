import React from 'react'
import image from '../../assets/images/comingsoon.jpg';

const Portfolio = () => {
  return (
    <div class="portfolio">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card">
            <img src={image} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Plenty of Pups</h5>
              <p class="card-text">A website for users to find doggy play date matches, bringing the worlds pups together.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src={image} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Budget Tracker</h5>
              <p class="card-text">A PWA budget tracker that allows the user to keep track of their expenses, even offline.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src={image} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Note Taker</h5>
              <p class="card-text">A standard app for creating, editing, and deleting personal notes.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src={image} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Team Profile Generator</h5>
              <p class="card-text">A node generator where businesses can build their teams into a visual layout.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;

