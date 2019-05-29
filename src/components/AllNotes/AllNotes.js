import React from 'react'
import { Link } from 'react-router-dom'


export default class AllNotes extends React.Component {

  constructor(props){
    super(props);
    this.notes = props.notes.map(note => {

      return (
        <li className='listNote' key={note.id}>
          <Link to={`/note/${note.id}`}>{note.name}</Link>
          <p>Date modified on {note.modified}</p>
          <p>{note.content}</p>
        </li>
      )

    })
    debugger;
  }

  // write function to map over props and return li
  // elements with <Link to="note/${link.id}"
  render() {
    return (
      <ul>
        {this.notes}
      </ul>
    )
  }
}
