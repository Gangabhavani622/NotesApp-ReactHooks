// Write your code here
import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  AppContainer,
  Heading,
  FormContainer,
  InputElement,
  TextAreaElement,
  Button,
  EmptyNotesCont,
  Image,
  EmptyHeading,
  EmptyDescription,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [notesList, setNote] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeDescription = event => {
    setDescription(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const noteItem = {
      title,
      description,
      id: uuidV4(),
    }
    setNote(prevState => [...prevState, noteItem])
    setTitle('')
    setDescription('')
  }

  const EmptyView = () => (
    <EmptyNotesCont>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyHeading>No Notes Yet</EmptyHeading>
      <EmptyDescription>Notes you add will appear here</EmptyDescription>
    </EmptyNotesCont>
  )

  const NonEmptyView = () => (
    <NotesList>
      {notesList.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NotesList>
  )

  return (
    <AppContainer>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={onSubmitForm}>
        <InputElement
          type="text"
          textType="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="Title"
        />
        <TextAreaElement
          type="textarea"
          textType="textArea"
          value={description}
          onChange={onChangeDescription}
          placeholder="Take a Note..."
        />
        <Button type="submit">Add</Button>
      </FormContainer>
      {notesList.length === 0 ? EmptyView() : NonEmptyView()}
    </AppContainer>
  )
}

export default Notes
