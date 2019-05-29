import React from 'react'

export default class GoBackSidebar extends React.Component{
  constructor(props){
    super(props);
    this.note = props.store.notes.find(store => {
      return store.id === props.match.params.noteid
    })
    this.folder = props.store.folders.find(folder => {
      return folder.id === this.note.folderId
    })
  }
  render(){
    return (
      <ul>
        <li>
          <h3>{ this.folder.name }</h3>
        </li>
        <button>Go Back</button>
      </ul>
    )
  }
}
