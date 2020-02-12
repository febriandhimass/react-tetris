import React from 'react';
import { StyledCell } from '../styles/components/StyledCell'
import { TETROMINOS } from '../utils/tetrominos'

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}/>
)

export default Cell;