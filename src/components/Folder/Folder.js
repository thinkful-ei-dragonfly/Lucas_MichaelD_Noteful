import React from 'react';
import { Link } from 'react-router-dom'

export default class Folder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notesList: []
    }
  }

  componentDidMount(){
    let notesList = this.props.notes.filter(allnote => allnote.folderId === this.props.match.params.folderid).map(note => {
      return (
            <Link to={`/note/${note.id}`}>
              <li className='listNote'>
                <h3>{note.name}</h3>
                <p>Date modified on {note.modified}</p>
                <button>Delete Note</button>
              </li>
            </Link>
      )
    })
    this.setState({notesList})
    // For some reason writing the above function didn't work in the constructor
    // so instead we created a state for the Folder and after the componentDidMount we setState with the filter + map function from above
    // in the render function, we're rendering the state.notesList
    // For some reason `this` was undefined,
  }

  render() {
    return (
      <ul>
          {this.state.notesList}
      </ul>
    )
  }

}
