// Style your elements here

import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
  align-items: center;
`

export const Heading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 10px;
  padding: 5px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  border: none;
  border-radius: 5px;
  box-shadow: 10px 10px 8px 10px #cbd5e1;
  width: 60%;
  padding: 20px;
`

export const InputElement = styled.input`
  border: none;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  color: #1e293b;
  height: max-content;
`
export const TextAreaElement = styled.textarea`
  border: none;
  font-family: 'Roboto';

  font-size: 18px;
  margin-bottom: 10px;
  color: #475569;
  width: 100%;
  height: 20%;
`

export const Button = styled.button`
  border: none;
  background-color: #4c63b6;
  color: #ffffff;
  padding: 8px;
  align-self: end;
`

export const EmptyNotesCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`
export const Image = styled.img`
  height: 30%;
  width: 30%;
  // background-color: #cbd5e1;
  color: #aab8c8;
  border: none;
  border-radius: 100%;
  padding: 6px;
`
export const EmptyHeading = styled.h1`
  font-size: 26px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #475569;
  margin-bottom: 4px;
`

export const EmptyDescription = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 300;
  color: #1e293b;
  margin-bottom: 4px;
`
export const NotesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 5px;
`
