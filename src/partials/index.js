// import React from 'react'
import styled, { css } from 'styled-components'

export const Page = styled.div`
  display: flex;
  flex-direction: column;
`
export const Button = styled.div`
  display: flex;
  padding: 10px 5px;
  border: 1px solid #333;
  cursor: pointer;
`
export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10px;
  & > * {
    margin-right: 10px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  position: absolute;
  background-image:  url("${props => props.imageURL}");
`
export const Slide = styled.div.attrs(({ position }) => ({
  style: {
    left: `${position}vw`
  }
}))`
  display: flex;
  width: 60vw;
  font-size: 200px;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  height: calc(60vw * 9 / 16);
  margin: 0 2.5vw;
  opacity: 0.7;
  //   transform: scale(0.8);
  flex-shrink: 0;
  border: 3px solid #000;
  background-size: cover;
  box-sizing: border-box;
  transition: all ${({ transitionDuration }) => transitionDuration} ease-in-out;

  ${props => props.isActive && activeHelper};
  background-color: grey;
`

const activeHelper = css`
  opacity: 1;
  transform: scale(1);
  background-image:  url("${props => props.imageURL}");
`
