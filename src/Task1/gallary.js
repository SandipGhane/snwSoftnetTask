import React from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { fetchData } from "./store/action";

class Gallary extends React.Component {
  // state = {
  //   photos: [],
  //   isloading: true,
  // };
  componentDidMount() {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/photos")
    //   .then(({ data }) => {
    //     this.setState({
    //       photos: data,
    //       isloading: false,
    //     });
    //   });
    console.log("i m mount");
    this.props.fetchData();
  }

  render() {
    const { photos, isLoading } = this.props;
    // console.log("props", this.props);
    console.log("photos", this.props);
    var randomTenPics = [];
    if (isLoading) {
      return <h2> Loading. </h2>;
    }
    if (photos.length) {
      for (var i = 0; i < 10; i++) {
        var idx = Math.floor(Math.random() * photos.length);
        // console.log(idx);
        randomTenPics.push(photos[idx].url);
      }
    }
    return (
      <div className="carousel">
        <h2> Random 10 pics Gallary </h2>{" "}
        {randomTenPics.map((pics, index) => (
          <img
            key={index}
            src={pics}
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        ))}{" "}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    photos: state.photos.photos,
    isLoading: state.photos.isLoading,
    error: state.photos.error,
  };
};

export default connect(mapStateToProps, {
  fetchData,
})(Gallary);
