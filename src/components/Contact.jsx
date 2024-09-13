const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="container">
        <div>
          <h3 className="contact-text">Get In Touch</h3>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src="contact-img.svg" alt="" />
          </div>

          <div className="col-md-6 contact-form">
            <form action="">
              <div className="row">
                <div className="col-sm-6 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-sm-12 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-sm-12 mt-3">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows={5}
                    name=""
                    id=""
                  ></textarea>

                  <button type="submit" className="btn submit-btn">
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
