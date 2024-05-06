import React from 'react';

import SecondNavbar from '../../../components/Navigation/SecondNavbar';
import Footer from '../../../components/Footer/Footer';

import studiesLogo from './images/studies-logo-300x200.gif';

import './Studies.scss';

const Studies = () => {
  return (
    <div>
      <SecondNavbar />

      <div className="container-fluid project">
        <div className="row modal-body">

          <div className="col-sm-6">
            <h2 className="text-center">Studies</h2>
            <hr className="star-primary"/>
            <img src={studiesLogo} className="img-fluid img-thumbnail center" alt="img"/>
          </div>

          <div className="col-sm-6 text-project">
            <div>
              My <i>theoretical</i> and <i>practical</i> studies:<br/>
              <ul>
                <li><strong>Topics:</strong></li>
                <ul>
                  <li>Programming Languages</li>
                  <li>Algorithms and Data Structures</li>
                  <li>Database</li>
                  <li>Computer Science Fundamentals</li>
                  <li>Artificial Intelligence</li>
                  <li>Mathematics</li>
                  <li>Others...</li>
                </ul>
              </ul>
              <a href="https://github.com/rodrigols89/studies" rel="noopener"><span className="section-title"> → [Project in GitHub]</span></a>
              <br/>
              <br/>
              <strong>NOTE:</strong><br/>
              Many of my studies are in Portuguese (Brazil).
              <br/>
              <br/>
            </div>
            <ul className="list-inline item-details">
              <li>
                Client: <strong>Myself</strong>
              </li>
              <li>
                Date: <strong>September 2021 to the present day</strong>
              </li>
              <li>
                Service: <strong>Studies</strong>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}

export default Studies;
