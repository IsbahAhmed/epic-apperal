import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter-area ptb-95">
      
        <div className="row m-0">
          <div className="col-lg-12 p-0">
            <div className="newsletter-inner text-center newsletter-bg">
              <h4 className="text">Join our</h4>
              <h2>Newsletters now!</h2>
              <p className="desc">
                Subscribe to the Juta mailing list to receive updates on new
                arrivals, offers and other discount information.
              </p>
              <form
               
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="newletter-input popup-subscribe-form validate"
                target="_blank"
                noValidate
              >
                <input
                  id="mc-email"
                  type="email"
                  autoComplete="off"
                  placeholder="Your email address"
                />
                <button
                  id="mc-submit"
                  type="submit"
                  className="btn btn-primary"
                >
                  <span>Subscribe !</span>
                </button>
              </form>
            </div>
          </div>
        </div>
   
    </div>
  );
};

export default NewsLetter;
