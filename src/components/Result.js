import React from "react";
import Loader from "./Loader";

export default function Result(props) {
  // console.log(" WeartherData", props.WeartherData);
  const { WeartherData: data } = props;
  // if (!data) {
  //   return null;
  // } 
  function ktoc(k) {
    return (k - 273.15).toFixed(2) + "° C";
  }
  function getthedate(s) {
    const date = new Date(s * 1000);
    return date.toTimeString();
  }
  let showPage;
  if (data === null) {
    if (props.loader === true) {
      showPage = <Loader></Loader>;
    } 
  } else {
    showPage = (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First </th>
              <th scope="col">Last</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>City</td>
              <td>
                {data.name}
                <img
                  src={` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>description</td>
              <td>{data.weather[0].description}</td>
            </tr>
            <tr>
              <td>Feels Like</td>
              <td>{data.main.feels_like}</td>
            </tr>
            <tr>
              <td>Min. Temp</td>
              <td>{ktoc(data.main.temp_min)}</td>
            </tr>
            <tr>
              <td>Max. Temp</td>
              <td>{ktoc(data.main.temp_max)}</td>
            </tr>
            <tr>
              <td>Sun Rise</td>
              <td>{getthedate(data.sys.sunrise)}</td>
            </tr>
            <tr>
              <td>Sun Set</td>
              <td>{getthedate(data.sys.sunset)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      {/* <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First </th>
              <th scope="col">Last</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>City</td>
              <td>
                {data.name}
                <img
                  src={` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>description</td>
              <td>{data.weather[0].description}</td>
            </tr>
            <tr>
              <td>Feels Like</td>
              <td>{data.main.feels_like}</td>
            </tr>
            <tr>
              <td>Min. Temp</td>
              <td>{ktoc(data.main.temp_min)}</td>
            </tr>
            <tr>
              <td>Max. Temp</td>
              <td>{ktoc(data.main.temp_max)}</td>
            </tr>
            <tr>
              <td>Sun Rise</td>
              <td>{getthedate(data.sys.sunrise)}</td>
            </tr>
            <tr>
              <td>Sun Set</td>
              <td>{getthedate(data.sys.sunset)}</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      {showPage}
    </div>
  );
}
