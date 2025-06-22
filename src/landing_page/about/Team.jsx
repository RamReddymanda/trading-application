import React from "react";

function Team() {
  return (
    <div className="container border-top mt-5 ">
      <h1 className="text-center mt-5">People</h1>
      <div className="row mt-5">
        <div className="col-6 text-center">
          <img
            style={{ borderRadius: "50%", width: "50%" }}
            src="media/nithinKamath.jpg"
            alt=""
          />
          <p className="mt-4">Nithin Kamath</p>
          <p>Founder & CEO</p>
        </div>
        <div
          className="col-md-5 col-9 p-4"
          style={{ fontSize: "1.1em", lineHeight: "1.8" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
           He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
           Playing basketball is his zen.
          </p>
          <p>Connect on <a style={{textDecoration:"none"}} href="">Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}
export default Team;
