import React from 'react';
import { StyledCell } from '../styles/components/StyledCell'
import { TETROMINOS } from '../utils/tetrominos'

const Cell = ({ type }) => (
<StyledCell type={type} color={TETROMINOS[type].color}>{console.log('rerender')}</StyledCell>
)

// memoize this component, and only re-render when this cell actually changed
export default React.memo(Cell);