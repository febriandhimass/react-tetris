import React, { useState } from 'react'

// custom hooks
import { useStage } from '../hooks/useStage';
import { usePlayer } from '../hooks/usePlayer';
import { useInterval } from '../hooks/useInterval';

// components
import Stage from '../components/Stage'
import Display from '../components/Display'
import StartButton from '../components/StartButton'

// styled component
import { StyledTetrisWrapper, StyledTetris } from '../styles/containers/StyledTetris'
import { createStage, checkCollision } from '../utils/gameHelpers';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer()
  const [stage, setStage] = useStage(player, resetPlayer)

  console.log('re-render')

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 })
    }
  }

  const startGame = () => {
    console.log('test')
    // reset everything
    setStage(createStage())
    setDropTime(1000)
    resetPlayer()
    setGameOver(false)
  }

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      // Game over
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!")
        setGameOver(true)
        setDropTime(null)
      }
      updatePlayerPos({ x: 0, y: 0, collided: true })
    }
  }

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        console.log('interval on')
        setDropTime(1000)
      }
    }
  }

  const dropPlayer = () => {
    console.log('interval off')
    setDropTime(null)
    drop()
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) { // left
        movePlayer(-1)
      } else if (keyCode === 39) { // right
        movePlayer(1)
      } else if (keyCode === 40) { // down
        dropPlayer()
      } else if (keyCode === 38) {
        playerRotate(stage, 1)
      }
    }
  }

  useInterval(() => {
    drop()
  }, dropTime)

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over"/>
          ) : (
            <div>
              <Display text="Score"/>
              <Display text="Rows"/>
              <Display text="Level"/>
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;