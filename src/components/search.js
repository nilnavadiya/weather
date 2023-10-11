import React from "react";
// import Loader from "./Loader";

export default function Search(props) {
  
  return (
    
    <div>
      {/* <Loader></Loader> */}
      <div>
        <div className="row  container-fluid">
          <div className="col-md-8 wealther-p1">
            <div className="balloon-div">
              <img
                className="balloon"
                src="asset/img/air-balloon-.png"
                alt="as"
              ></img>
            </div>

            <div className="">
              <div className="card-header p-4 border-0">
                <div className="text-center mb-3">
                  <p className="h2 mb-1">{props.changecity}</p>
                  <p className="mb-1"></p>
                  <p className="mb-1">scattered clouds</p>
                  <p className="display-1 mb-1">21°C</p>
                  <span className="">
                    Pressure: <span>1008 </span>
                  </span>
                  <span className="mx-2">|</span>
                  <span className="">
                    Humidity: <span>66°C</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 wealther-p2 ">
            <div
              className="card w-100 h-50 bg-transparent text-light border-0 p-3"
              style={{ width: "18rem" }}
            >
              <div className="serch-i">
                <i
                  className="fa-solid fa-magnifying-glass"
                  onClick={props.cityChange}
                ></i>
              </div>
              <div className="card-header">
                <form action="">
                  <div className="form-group">
                    <input
                      type="text "
                      className="form-control bg-transparent border-0 text-light w-75"
                      id="exampleFormControlInput1"
                      placeholder="Another Location"
                      name="city"
                      value={props.city}
                      onChange={props.change}
                    ></input>
                  </div>
                </form>
              </div>
              <ul className="list-group list-group-flush ">
                <li className="list-group-item ">Bangalore</li>
                <li className="list-group-item">Pune</li>
                <li className="list-group-item">Surat</li>
                <li className="list-group-item">Hyderabad</li>
              </ul>
            </div>
            <div>
              <hr />
              <h2 className="text-light text-center">
                Get Co-Ordinate{" "}
                <span>
                  <button
                    className="fa-solid fa-map-pin bg-transparent text-white border-0"
                    onClick={props.loction}
                  ></button>
                </span>{" "}
              </h2>
            </div>
            <div className="get-co p-3">
              <form className="p-3">
                <div className="form-group py-2">
                  <label htmlFor="exampleInputEmail1" className="rgb-143 h6">
                    Latitude:-
                  </label>
                  <input
                    type="number"
                    className="form-control shadow-none"
                    name="lat"
                    value={props.lat}
                    onChange={props.change}
                  />
                </div>
                <div className="form-group py-2">
                  <label htmlFor="exampleInputPassword1" className="rgb-143">
                    Longitude:-
                  </label>
                  <input
                    type="number"
                    className="form-control shadow-none h6"
                    id="exampleInputPassword1"
                    name="lon"
                    value={props.lon}
                    onChange={props.change}
                  ></input>
                </div>

                <button
                  type="submit" onClick={props.search}
                  className="btn btn-primary my-2 px-4 mb-4" 
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
