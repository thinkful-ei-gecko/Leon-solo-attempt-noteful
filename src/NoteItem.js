import React from 'react'

export default function NoteItem(props) {
    return (
      <li className={props.className}>
        {props.name}
        {props.modified}
        {(props.note && props.content)}
      </li>
    )
}
