import React from 'react'

const Contact = () => {
  return (

    <div>
      <div class="contact-title">
        <h1 class="display-4">Contact me.</h1>
        <p class="lead">
          Send me a message, I'd love to hear from you!
          </p>
      </div>
      <div class="contact">
        <form class="contact-form">
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Name</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>

        <div class="social-media">
          <p>Where else you can find me...
      </p>
          <div className="icons">
            <a href="https://github.com/beachybeach" target="_blank" rel="noreferrer">
              <i class="fab fa-github fa-7x" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/rileysbeach/" target="_blank" rel="noreferrer">
              <i class="fab fa-linkedin-in fa-7x"></i>
            </a>
            <a href="https://stackoverflow.com/users/15348326/riley-beach" target="_blank" rel="noreferrer">
              <i class="fab fa-stack-overflow fa-7x"></i>
            </a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact;