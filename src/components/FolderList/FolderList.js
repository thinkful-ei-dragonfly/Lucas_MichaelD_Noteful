import React from 'react'

export default class FolderList extends React.Component{
  constructor(props) {
    super(props);

    this.FolderList = props.folders.map(folders => {
      return (
        <div key={folders.id}>
          <p>{folders.name}</p>
        </div>
      )
    })
  }
  
    render(){
    return (
      <ul>
        { this.FolderList }
      </ul>
    )
  }
}
