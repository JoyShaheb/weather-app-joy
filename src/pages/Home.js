import React, { useState, useEffect } from "react";
import Today from "../components/Cards/Today";
import Search from "../components/Search/Search";

import thermometer from "../images/thermometer.svg";
import clock from "../images/clock.svg";
import GPS from "../images/gps.svg";

const Home = () => {
  //True -> fahrenheit
  // False -> Celcius
  let [search, setSearch] = useState("Dhaka");
  let [unitToggle, setUnitToggle] = useState(false);
  let [unit, setUnit] = useState(["metric", "° C"]);
  let [rawData, updateRawData] = useState([]);
  let { main, weather, name, sys } = rawData;

  console.log(rawData);

  let base = `https://api.openweathermap.org/data/2.5/weather`;
  // let key = `${process.env.REACT_APP_OPEN_WEATHER_API}`;
  let key = `e2778808fa4791c7016333fe05293447`;
  let api = `${base}?q=${search}&units=${unit[0]}&appid=${key}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateRawData(data);
    })();
  }, [api]);
  return (
    <div className="">
      <h1 className="text-center my-4">Daily Forecast</h1>
      <Search setSearch={setSearch} />
      <div className="container">
        <div className="d-flex align-items-center gap-3 fs-5 mb-3">
          <h2 className="">Overview</h2>
          Metric
          <div className="form-check form-switch">
            Imperial
            <input
              onChange={() => {
                setUnitToggle((prevCheck) => !prevCheck);

                unitToggle
                  ? setUnit(["metric", "° C"])
                  : setUnit(["imperial", "F"]);
              }}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <div className="row mb-4 ">
          <div
            style={{ backgroundColor: "#999999", borderRadius: "16px" }}
            className="col-3"
          >
            images are here
          </div>
          <div className="col-8">
            <div className="row mb-5 temp time">
              <div className="col temp">
                <img style={{ width: "20px" }} src={thermometer} alt="" />
                <span>
                  {" "}
                  Temperature : {main?.temp} {unit[1]}
                </span>
              </div>
              <div className="col time">
                <img src={clock} alt="" className="ms-4 me-3" />
                <span>Monday, 8:30pm</span>
              </div>
            </div>
            <div className="row location icon">
              <div className="col location">
                <img src={GPS} alt="" className="me-3" />
                <span>
                  {name}, {sys?.country}
                </span>
              </div>
              <div className="col icon">
                <img
                  src={`http://openweathermap.org/img/wn/${weather?.map(
                    (x) => x.icon
                  )}@2x.png`}
                  alt=""
                />
                <span> {weather?.map((x) => x.main)} </span>
              </div>
            </div>
          </div>
        </div>
        <Today
          main={main}
          unitToggle={unitToggle}
          setUnitToggle={setUnitToggle}
          setUnit={setUnit}
        />
      </div>
    </div>
  );
};

export default Home;
