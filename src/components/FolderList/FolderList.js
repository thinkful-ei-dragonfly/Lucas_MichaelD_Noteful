import React from 'react'
import { Link } from 'react-router-dom';

export default class FolderList extends React.Component{
  constructor(props) {
    super(props);

    this.FolderList = props.folders.map(folders => {
      return (
        <Link to={`/folder/${folders.id}`} key={folders.id}>
        <div>
        <p>{folders.name}</p>
        </div>
        </Link>
      )
    })
  }
  
    render(){
    return (
      <ul>
        { this.FolderList }
        <button>Add Folder</button>
      </ul>
    )
  }
}
