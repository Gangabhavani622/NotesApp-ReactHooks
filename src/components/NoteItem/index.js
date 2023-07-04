// Write your code here
import {NoteContainer, NoteHeading, NoteDescription} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, description} = noteDetails

  return (
    <NoteContainer>
      <NoteHeading>{title}</NoteHeading>
      <NoteDescription>{description}</NoteDescription>
    </NoteContainer>
  )
}

export default NoteItem
