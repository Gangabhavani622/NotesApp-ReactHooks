// Style your elements here
import styled from 'styled-components'

export const NoteContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 2px;
  border-radius: 15px;
  border-color: #cbd5e1;
  height: max-content;
  border-style: solid;
  align-self: start;
  width: 60%;
`

export const NoteHeading = styled.h1`
  font-size: 26px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #475569;
  margin-bottom: 4px;
`

export const NoteDescription = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 300;
  color: #1e293b;
  margin-bottom: 4px;
`
