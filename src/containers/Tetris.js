import React from 'react'
import { createStage } from '../utils/gameHelpers'
import Stage from '../components/Stage'
import Display from '../components/Display'
import StartButton from '../components/StartButton'
import { StyledTetrisWrapper, StyledTetris } from '../styles/containers/StyledTetris'

const Tetris = () => {
  console.log(createStage())
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score"/>
            <Display text="Rows"/>
            <Display text="Level"/>
          </div>
          <StartButton/>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;