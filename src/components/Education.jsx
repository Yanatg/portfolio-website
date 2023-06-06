import React from "react";

function Education() {
  return (
    <div id="education" className="education-container">
      <h2>Education</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
                <img src="/images/read.png" alt="edIcon"/>
                <h3 className="fs-2 text-body-emphasis">2010-2018</h3>
                <p>Kasetsart Laboratory School</p>
                <h3>GPAX 3.98</h3>

            </div>
            <div className="feature col">
                <img src="/images/online-library.png" alt="edIcon"/>
                <h3 className="fs-2 text-body-emphasis">2019-2021</h3>
                <p>Triam Udom Suksa School</p><br/>
                <h3>GPAX 3.62</h3>

            </div>
            <div className="feature col">
                <img src="/images/analysis.png" alt="edIcon"/>
                <h3 className="fs-2 text-body-emphasis">2022-now</h3>
                <p>Kasetsart University</p><br/>
                <h3>GPAX 3.40</h3>

            </div>
        </div>
    </div>
  );
}

export default Education;
