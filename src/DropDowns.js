import React from "react";

const ProductsDropdown = ({ current, prev }) => {
  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
      <div data-prevent-distortion>
        <div className="dropdown-section">
          <ul className="products-section">
            <li>
              <h3 className="heading">Digital Fortress</h3>
              <p>Welcome</p>
            </li>
            <li>
              <h3 className="heading">It requires techonolgy</h3>
              <p>You've got you covered</p>
            </li>
            <li>
              <h3 className="heading">Depend on your strategy</h3>
              <p style={{ marginBottom: 0 }}>The only way to success</p>
            </li>
          </ul>
         </div>
         
      </div>
    </div>
  );
};

const DevelopersDropdown = ({ current, prev }) => {
  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
      <div data-prevent-distortion>
        <div className="dropdown-section">
          <ul className="products-section">
            <li>
              <h3 className="heading">Rule 1:</h3>
              <p>.</p>
            </li>
            <li>
              <h3 className="heading">Rule 2:</h3>
              <p>.</p>
            </li>
            <li>
              <h3 className="heading">Rule 3:</h3>
              <p style={{ marginBottom: 0 }}>.</p>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

const CompanyDropdown = ({ current, prev }) => {
  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
      <div data-prevent-distortion>
        <div className="dropdown-section">
          <ul className="products-section">
            <li>
              <h3 className="heading">profile</h3>
              <p>Get Full Control.</p>
            </li>
            
            <li>
              <div>
                <h3 className="heading">Dashboard</h3>
                <p style={{ marginBottom: 0 }}>
                  Dashboard provides you with an efficient way to manage all your clients
                </p>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export { ProductsDropdown, DevelopersDropdown, CompanyDropdown };
