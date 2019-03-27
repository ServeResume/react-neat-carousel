import React from "react";
import styled, { css } from "styled-components";

const activeHelper = css`
  opacity: 1;
  transform: scale(1);
  background-image:  url("${props => props.imageURL}");
`;

const SlideWrapper = styled.div.attrs(({ position }) => ({
  style: {
    left: `${position}vw`
  }
}))`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  width: 60vw;
  font-size: 200px;
  color: white;
  height: calc(60vw * (${({ imageRatio }) => imageRatio}));
  margin: 0 2.5vw;
  opacity: 0.7;
  // transform: scale(0.8);
  position: relative;
  flex-shrink: 0;
  border: 3px solid #000;
  box-sizing: border-box;
  transition: all ${({ transitionDuration }) => transitionDuration} ease-in-out;
  background-size: cover;
  background-color: grey;
  background-position: center;

  ${props => props.isActive && activeHelper};
`;
const Text = styled.div.attrs(({ fontSize }) => ({
  style: {
    fontSize
  }
}))`
  margin-left: -40px;
`;
const Slide = props => (
  <SlideWrapper {...props}>
    <Text fontSize="30px">{props.title}</Text>
    <Text fontSize="24px">{props.subtitle}</Text>
  </SlideWrapper>
);
export default Slide;
