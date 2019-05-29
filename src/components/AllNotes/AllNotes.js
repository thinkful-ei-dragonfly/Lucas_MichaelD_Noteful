import React from 'react'
import { Link } from 'react-router-dom'


export default class AllNotes extends React.Component {

  constructor(props){
    super(props);
    this.notes = this.props.notes.map(note => {
      return (
        <li className='listNote' key={note.id}>
          <Link to={`/note/${note.id}`}>{note.name}</Link>
          <p>Date modified on {note.modified}</p>
          <button>Delete Note</button>
        </li>
      )
    })
  }

  componentDidMount() {

  }

  render() {
    return (
      <ul>
        {this.notes}
      </ul>
    )
  }
}
