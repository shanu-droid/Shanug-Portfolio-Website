import './Contact.css'

const Contact = () => {
    return (
        <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
              <div className="column left">
                  <div className="text">Get in Touch</div>
                  <p>Hope you liked my portfolio and Skills, If you want to get in touch with me either e-mail me or message me through the form or connect with me on LinkedIn by clicking on the link below. Thank you!</p>
                  <div className="icon">
                  <div className="row">
                    <i className="fas fa-user"></i>
                    <div className="info">
                       <div className="head">Name</div>
                       <div className="sub-title">Shanu Gautam</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="info">
                       <div className="head">Address</div>
                       <div className="sub-title">Meerut, India</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fas fa-envelope"></i>
                    <div className="info">
                       <div className="head">Email</div>
                       <div className="sub-title">shanugauz13@gmail.com</div>
                    </div>
                  </div>
                  <div className="row">
                  <i className="fab fa-github"></i>
                  <div className="info">
                     <div className="head">GitHub</div>
                     <div className="sub-title"><a href="https://github.com/shanu-droid">shanu-droid</a></div>
                  </div>
                </div>
                <div className="row">
                <i className="fab fa-linkedin"></i>
                <div className="info">
                   <div className="head">Likedin</div>
                   <div className="sub-title"><a href="https://www.linkedin.com/in/shanu-gautam-514059184/">Shanu Gautam</a></div>
                </div>
              </div>
                  </div>
              </div>
              <div className="column right">
                <div className="text">Message me</div>
                <form action="#">
                   <div className="fields">
                   <div className="field name">
                     <input type="text"  placeholder="Name" required/>
                   </div>
                   <div className="field email">
                     <input type="email"  placeholder="Email" required/>
                   </div>
                   </div>
                   <div className="field">
                     <input type="text"  placeholder="Subject" required/>
                   </div>
                   <div className="field textarea">
                     <textarea  cols="30" rows="10" placeholder="Describe project.." required></textarea>
                   </div>
                   <div className="button">
                   <button type="submit">Send Message</button>
                   </div>
                  
                </form>
              </div>
          </div>
        </div>
            
        </section>
    )
}

export default Contact
