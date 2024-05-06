/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Medium.scss';

const Medium = () => {

    const [mediumData, setMediumData] = useState([]);

    const getData = async () => {
        const res = await axios.get(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rodrigols89"
        );
        setMediumData(res.data.items);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <section id="medium">

                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title">Medium</h2>
                            <hr />
                        </div>
                    </div>


                    {/* First row */}
                    <div className="row row-padding">
                        <div className="card-deck">
                            {/* First Card */}
                            <div className="card">
                                <img className="card-img-top" src={mediumData[0]?.content.match(/src="([^"]+)"/)?.[1] || "https://image.freepik.com/free-photo/coming-soon-neon-sign-purple-blue-glow-neon-text-brick-wall-lit-by-neon-lamps-night-lighting-wall_124343-10.jpg"} alt="img" />
                                <div className="card-body">
                                    <a href={mediumData[0]?.link} target="_blank" rel="noopener noreferrer">
                                        <h5 className="card-title">{mediumData[0]?.title || "Soon..."}</h5>
                                    </a>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Date: {mediumData[0]?.pubDate}</small>
                                </div>
                            </div> {/* First Card */}
                            {/* Second Card */}
                            <div className="card">
                                <img className="card-img-top" src={mediumData[1]?.content.match(/src="([^"]+)"/)?.[1] || "https://image.freepik.com/free-photo/coming-soon-neon-sign-purple-blue-glow-neon-text-brick-wall-lit-by-neon-lamps-night-lighting-wall_124343-10.jpg"} alt="img" />
                                <div className="card-body">
                                    <a href={mediumData[1]?.link} target="_blank" rel="noopener noreferrer">
                                        <h5 className="card-title">{mediumData[1]?.title || "Soon..."}</h5>
                                    </a>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Date: {mediumData[1]?.pubDate}</small>
                                </div>
                            </div> {/* Second Card */}
                            {/* Third Card */}
                            <div className="card">
                                <img className="card-img-top" src={mediumData[2]?.content.match(/src="([^"]+)"/)?.[1] || "https://image.freepik.com/free-photo/coming-soon-neon-sign-purple-blue-glow-neon-text-brick-wall-lit-by-neon-lamps-night-lighting-wall_124343-10.jpg"} alt="img" />
                                <div className="card-body">
                                    <a href={mediumData[2]?.link} target="_blank" rel="noopener noreferrer">
                                        <h5 className="card-title">{mediumData[2]?.title || "Soon..."}</h5>
                                    </a>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Date: {mediumData[2]?.pubDate}</small>
                                </div>
                            </div> {/* Third Card */}
                        </div>
                    </div> {/* First row */}


                </div>
            </section>
        </>
    );
}

export default Medium;
