import React from 'react'
import './FolderOpen.css'
import FolderItem from './FolderItem';
import { Link } from 'react-router-dom';

function createList(props, specificFolder) {
  let list = props.store.folders.map(folder => {
    let folderPath = `/folder/${folder.id}`;
    if (specificFolder && folder.id === specificFolder) {
      return <Link to={folderPath}><FolderItem className="activeFolder" {...folder} key={folder.id} /></Link>
    }
    else {
      return <Link to={folderPath}><FolderItem {...folder} key={folder.id}/></Link>
    }
  })
  return list;
}

function checkIfOpen(props) {
  let folderReturn = null;
  if (props.store.folders.find(folder => folder.id === props.matchProps.match.params.folderId)) { 
    folderReturn = props.matchProps.match.params.folderId;
    return createList(props, folderReturn);
  }
  return createList(props);
}

export default function FolderOpen(props) {
    return (
      <ul>
        {console.log(props)}
        {checkIfOpen(props)}
      </ul>
    )
}
