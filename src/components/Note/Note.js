import React from 'react';

export default class Note extends React.Component {
  constructor(props){
    super(props);
    this.note = props.notes.find(note => {
      return note.id === props.match.params.noteid
    })
  }

  render() {
    return (
      <div>
        <h3>{this.note.name}</h3>
        <p>Date modified {this.note.modified} </p>
        <button>Delete Note</button>
        <br/>
        <p>{this.note.content}</p>

      </div>
    )
  }

}
