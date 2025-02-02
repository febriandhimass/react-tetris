import styled from 'styled-components'

export const StyledDisplay = styled.div`
  width: 100%;
  min-height: 30px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  border: 4px solid #333;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
`