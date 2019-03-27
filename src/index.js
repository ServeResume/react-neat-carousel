import React, { Component } from "react";
import { Spring, config } from "react-spring";
import { Wrapper, Slide, Page, ButtonWrapper, Button } from "./partials";
import {
  getInitialArray,
  getProperNumber,
  getProperElements,
  moveData
} from "./helpers";

class NeatCarousel extends Component {
  state = {
    activeIndex: 0,
    currentPosition: -115,
    positionToBe: -115,
    isMoving: false,
    data: getInitialArray(this.props.data),
    isInitial: true,
    didDataJustShift: false
  };

  static defaultProps = {
    imageRatio: 9 / 16
  };
  componentDidUpdate(_, prevState) {
    if (!this.state.isMoving && prevState.isMoving) {
      const newData = [...this.state.data];
      this.setState({
        data: moveData(this.state.isInNextDirecion, newData),
        positionToBe: -115,
        currentPosition: -115
      });
    }
  }

  onPrevClick = () => {
    const {
      props: { data },
      state: { isMoving, activeIndex, currentPosition }
    } = this;
    if (!isMoving) {
      this.setState({
        activeIndex: getProperNumber(activeIndex - 1, data.length),
        positionToBe: currentPosition + 65,
        isInNextDirecion: false,
        isMoving: true
      });
    }
  };
  onNextClick = () => {
    const {
      props: { data },
      state: { isMoving, activeIndex, currentPosition }
    } = this;
    if (!isMoving) {
      this.setState({
        activeIndex: getProperNumber(activeIndex + 1, data.length),
        positionToBe: currentPosition - 65,
        isMoving: true,
        isInNextDirecion: true
      });
    }
  };
  onRest = () => {
    this.setState({
      isMoving: false,
      currentPosition: this.state.positionToBe
    });
  };

  render() {
    const {
      onNextClick,
      onPrevClick,
      onRest,
      state: { activeIndex, currentPosition, positionToBe, isMoving },
      props: { data, imageRatio }
    } = this;
    return (
      <Page>
        <ButtonWrapper>
          <Button onClick={onPrevClick}>Prev</Button>
          <Button onClick={onNextClick}>Next</Button>
        </ButtonWrapper>
        <div>
          <Spring
            from={{ position: currentPosition }}
            to={{ position: Math.ceil(positionToBe) }}
            onRest={onRest}
            config={config.default}
            immediate={!isMoving}
          >
            {({ position }) => (
              <Wrapper>
                {getProperElements(this.state.data, activeIndex).map(
                  elementProps => (
                    <Slide
                      key={Math.random()}
                      position={position}
                      isActive={
                        getProperNumber(activeIndex, data.length) ===
                          elementProps.index && !isMoving
                      }
                      imageRatio={imageRatio}
                      {...elementProps}
                    >
                      {elementProps.index}
                    </Slide>
                  )
                )}
              </Wrapper>
            )}
          </Spring>
        </div>
      </Page>
    );
  }
}

export default NeatCarousel;
