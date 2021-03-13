import React from 'react'

const Contact = () => {
  return (
    <div class=" contact-form w-25">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Name</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
      <div class="social-media">
        <p>Where else you can find me...
      </p>

        <button type="button" class="btn">
          <i class="fab fa-github fa-7x"></i>
        </button>
        <button type="button" class="btn">
          <i class="fab fa-linkedin fa-7x"></i>
        </button>
        <button type="button" class="btn">
          <i class="fab fa-stack-overflow fa-7x"></i>
        </button>
      </div>
    </div>
  )
}

export default Contact;