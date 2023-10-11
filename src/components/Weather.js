import React, { Component } from "react";
import Search from "./search";
import Result from "./Result";
import axios from "axios";
// import Loader from "./Loader";
export default class Wealther extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      lat: "",
      lon: "",
      wealtherData: null,
      changecity: "India",
      loading: false,
    };
  }
  changeHandler = (event) => {
    // console.log(event);
    const name = event.target.name;
    // console.log(name)
    if (name === "city") {
      this.setState({
        city: event.target.value,
      });
    } else if (name === "lat") {
      this.setState({
        lat: event.target.value,
      });
    } else if (name === "lon") {
      this.setState({
        lon: event.target.value,
      });
    }
  };
  componentDidMount() {
    this.clickHandler = () => {
      // console.log("sdfghjk");
      if (this.state.city.length !== 0) {
        this.setState({ changecity: this.state.city });
      } else {
        alert("Plz Enter loction");
      }
    };
  }
  loctionHandler = () => {
    // alert("your loction is true");
    this.setState({
      city: "",
      lat: "",
      lon: "",
      wealtherData: null,
      loading: true,
    });
    console.log(this.state.loading);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          setTimeout(() => {
            this.setState({
              lat: res.coords.latitude,
              lon: res.coords.longitude,
            });
            const { latitude: lat, longitude: lon } = res.coords;
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b1e66862402ec349b854554465ed884a`
              )
              .then((result) => {
                console.log(result);
                this.setState({
                  city: result.data.name,
                  wealtherData: result.data,
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }, 1000);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log("LOCTION NOT SUPPORT");
    }
  };

  searchHandler = (event) => {
    event.preventDefault();
    if (!this.state.lat || !this.state.lon) return;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=b1e66862402ec349b854554465ed884a`
      )
      .then((result) => {
        console.log(result);
        this.setState({
          city: result.data.name,
          wealtherData: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  cityHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=b1e66862402ec349b854554465ed884a`
      )
      .then((result) => {
        console.log(result);
        this.setState({
          city: result.data.name,
          lat: result.data.coord.lat,
          lon: result.data.coord.lon,

          wealtherData: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Search
          change={this.changeHandler}
          city={this.state.city}
          lat={this.state.lat}
          lon={this.state.lon}
          click={this.clickHandler}
          changecity={this.state.changecity}
          loction={this.loctionHandler}
          WeartherData={this.state.wealtherData}
          search={this.searchHandler}
          cityChange={this.cityHandler}
        ></Search>
        <Result
          WeartherData={this.state.wealtherData}
          loader={this.state.loading}
        ></Result>
        {/* <Loader></Loader> */}
      </div>
    );
  }
}
