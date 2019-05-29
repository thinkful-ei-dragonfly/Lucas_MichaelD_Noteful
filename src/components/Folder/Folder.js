import React from 'react';

export default class Folder extends React.Component {
  constructor(props){
    super(props);
    debugger;
    this.notesList = props.notes.map(note => {
      return note.folderId === props.match.params.folderid
    })
  }

  // display all child notes where the folderId matches notes.id
  // define variable which is result of mapping over note this.props.
  // write function that returns a JSX object
  render() {
    return (
      <ul>
          <li>FOLDER PAGE</li>
          <li>List of children notes</li>
          {/*
            1. Import Links and Note components
            2. Side bar will have a link to folderSidebar
            3. <Link to="/note/${noteid}" />  */}
      </ul>
    )
  }

}
