import React from 'react'
import { Link } from 'react-router-dom';
import NoteItem from './NoteItem';

function displayOpenNote(props, noteOpen) {
  console.log(noteOpen.name);
  return <NoteItem note="true" {...noteOpen} key={noteOpen.id} />
}

function createList(props, specificFolder) {
  let list = ''
  if (specificFolder) {
    console.log('specific folder');
    list = specificFolder.map(note => {
      let notePath = `/note/${note.id}`;
      return <Link to={notePath}><NoteItem {...note} key={note.id}/></Link>
    })
  }
  else {
    list = props.store.notes.map(note => {
      let notePath = `/note/${note.id}`;
      return <Link to={notePath}><NoteItem {...note} key={note.id}/></Link>
    });
  }
  return list;
}


//checks if a note is open or a folder or neither
function checkIfOpen(props) {
  if (props.matchProps.match.params.noteId) {
    //display the note
    console.log('found note');
    let noteOpen = props.store.notes.find(note => props.matchProps.match.params.noteId === note.id);
    if (noteOpen) { return displayOpenNote(props, noteOpen); }
    else {
      console.log('not a match');
      return <p>not a match</p>
    }
  }
  else if (props.matchProps.match.params.folderId) {
    //display folder notes
    console.log('found folder');
    let folderOpen = props.store.notes.filter(note => props.matchProps.match.params.folderId === note.folderId);
    console.log(folderOpen);
    if (folderOpen) { return createList(props, folderOpen); }
  }
  else {
    //neither have been selected yet, display all.
    console.log('no match');
    return createList(props);
  }
}

export default function FolderOpen(props) {
    return (
      <div>
        {checkIfOpen(props)}
      </div>
    )
}
