import React from "react";

function Work() {
  return (
    <div id="work" className="work-container">
      <h2>Works</h2>
        <div className="container cards">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card shadow-sm">
                        <img
                          src="/images/piano.jpeg"
                          alt="Thumbnail"
                          className="bd-placeholder-img card-img-top"
                          id="piano"
                        />
                        <div className="card-body">
                            <p className="card-text">Piano Melody</p>
                            <p className="card-text">Part of YearI semI Project. The project is the program about the virtual piano made by Python with OOP.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button"
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() => window.open("https://github.com/Yanatg/Piano-Melody")}>more
                                    </button>

                                </div>
                                <small className="text-body-secondary">2022</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-sm">
                        <img
                          src="/images/country.jpeg"
                          alt="Thumbnail"
                          className="bd-placeholder-img card-img-top"
                          id="countries"
                        />
                        <div className="card-body">
                            <p className="card-text">Countries in the world</p>
                            <p className="card-text">Part of YearI Project. The project is about the data visualization. I made the program to visualize the data of countries around the world.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button"
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() => window.open("https://github.com/Yanatg/Year-Project-2023")}>more
                                    </button>

                                </div>
                                <small className="text-body-secondary">2023</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-sm">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                             xmlns="http://www.w3.org/2000/svg" role="img"
                             aria-label="Placeholder: Thumbnail"
                             preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                        </svg>
                        <div className="card-body">
                            <p className="card-text">Another Work</p>
                            <p className="card-text">This is a wider card with supporting text below
                                as a natural lead-in to additional content. This content is a little
                                bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button"
                                            className="btn btn-sm btn-outline-secondary">View
                                    </button>
                                </div>
                                <small className="text-body-secondary"></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Work;
