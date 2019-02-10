import React, { Component } from 'react'
import { Spring, config } from 'react-spring'
import { Wrapper, Slide, Page, ButtonWrapper, Button } from './partials'
import data, {
  getInitialArray,
  mutableRotateLeft,
  mutableRotateRight,
  getProperNumber
} from './data'

export default class ExampleComponent extends Component {
  state = {
    activeIndex: 0,
    currentPosition: -115,
    positionToBe: -115,
    isMoving: false,
    data: getInitialArray(data),
    isInitial: true,
    didDataJustShift: false
  }

  componentDidUpdate (_, prevState) {
    if (!this.state.isMoving && prevState.isMoving) {
      const newData = [...this.state.data]
      this.setState({
        data: this.state.isInNextDirecion
          ? mutableRotateLeft(newData)
          : mutableRotateRight(newData),
        positionToBe: -115,
        currentPosition: -115
      })
    }
  }

  onPrevClick = () => {
    const { isMoving, activeIndex, currentPosition } = this.state
    if (!isMoving) {
      this.setState({
        activeIndex: getProperNumber(activeIndex - 1, data.length),
        positionToBe: currentPosition + 65,
        isInNextDirecion: false,
        isMoving: true
      })
    }
  }
  onNextClick = () => {
    const { isMoving, activeIndex, currentPosition } = this.state
    if (!isMoving) {
      this.setState({
        activeIndex: getProperNumber(activeIndex + 1, data.length),
        positionToBe: currentPosition - 65,
        isMoving: true,
        isInNextDirecion: true
      })
    }
  }
  onRest = () => {
    this.setState({
      isMoving: false,
      currentPosition: this.state.positionToBe
    })
  }

  render () {
    const {
      onNextClick,
      onPrevClick,
      onRest,
      state: { activeIndex, currentPosition, positionToBe, isMoving }
    } = this
    return (
      console.log('activeIndex: ', activeIndex) || (
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
                  {this.state.data.map(({ index, imageURL }) => (
                    <Slide
                      key={Math.random()}
                      position={position}
                      isActive={activeIndex === index && !isMoving}
                      imageURL={imageURL}
                    >
                      {index}
                    </Slide>
                  ))}
                </Wrapper>
              )}
            </Spring>
          </div>
        </Page>
      )
    )
  }
}
