import React, { useState, useEffect } from "react";
import ReactSpeedometer from "react-d3-speedometer";

import SemiCircleProgressBar from "react-progressbar-semicircle";

const Today = ({ unitToggle, setUnitToggle, setUnit, main }) => {
  return (
    <div className="">
      <div className="d-flex align-items-center gap-3 fs-5 mb-3">
        <h2 className="">Daily Insights</h2>
      </div>

      <style jsx>
        {`
          .card-today {
            border-radius: 8px;
            color: #999999;
            border: 2px solid #0b5ed7;
            // height: 30vh;
          }
        `}
      </style>
      <div className="row gap-4">
        <div className="col p-3 card-today">
          <h4 className="mb-3">Humidity</h4>
          <div className="d-flex mb-3 fs-4 text-primary justify-content-center">
            <SemiCircleProgressBar
              percentage={main?.humidity}
              showPercentValue
              stroke="#0b5ed7"
              strokeWidth={16}
              background="#E8E8E8"
            />
          </div>
          <h5 className="mb-3">Status : Change this later</h5>
        </div>
        <div className="col p-3 card-today">
          <h4 className="mb-1">Pressure</h4>
          <div
            style={{ height: "130px" }}
            className=" d-flex justify-content-center"
          >
            <ReactSpeedometer
              forceRender={true}
              width={200}
              textColor="#999999"
              startColor="#0b5ed7"
              endColor="#0b5ed7"
              needleColor="#999"
              segments={5}
              ringWidth={20}
              minValue={980}
              maxValue={1030}
              value={main?.pressure}
            />
          </div>
          <h5 className="mb-3">Status : Change this later</h5>
        </div>

        <div className="col p-3 card-today">
          <h4 className="mb-3">UV Index</h4>{" "}
          <div
            class="progress"
            style={{ height: "20px", borderRadius: "20px" }}
          >
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: `${main?.humidity}%` }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {main?.humidity}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
