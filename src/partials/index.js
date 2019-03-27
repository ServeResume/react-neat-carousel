export { default as Slide } from "./Slide";
import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #666;
  height: 100vh;
`;
export const Button = styled.div`
  display: flex;
  padding: 10px 5px;
  border: 1px solid #333;
  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10px 0;
  & > * {
    margin-right: 10px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
  background-image:  url("${props => props.imageURL}");
`;
