import React from 'react';

function Footer() {
    return (
      <div className="main-footer bg-dark col-md-6 col-sm-12 pb-sm-0">
        <div className="container">
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} CESAR FRANCO | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;