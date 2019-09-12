import React from'react'

export default function FolderItem(props) {
    return (
      <li className={props.className}>
        {props.name}
        {props.modified}
        {(props.note && props.content)}
      </li>
    )
}
