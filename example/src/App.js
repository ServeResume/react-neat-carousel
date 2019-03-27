import React, { Component } from "react";
import NeatCarousel from "react-neat-carousel";

const colors = [
  "d32f2f",
  "7B1FA2",
  "303F9F",
  "0097A7",
  "388E3C",
  "FFA000",
  "5D4037"
];

const placeholderImage = "https://via.placeholder.com/1600x900/bgColor/0000FF";
const testData = Array(7)
  .fill({
    title: "Some title",
    id: Math.random(),
    subtitle: "skdhfusdfh"
  })
  .map((item, index) => ({
    ...item,
    index,
    imageURL: placeholderImage.replace("bgColor", colors[index])
  }));

export default class App extends Component {
  render() {
    return <NeatCarousel data={testData} />;
  }
}
