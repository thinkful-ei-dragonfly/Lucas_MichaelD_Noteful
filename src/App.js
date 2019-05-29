import React from "react";
import Header from './components/Header/Header'
import Folder from './components/Folder/Folder'
import FolderList from './components/FolderList/FolderList'
import CurrentFolder from './components/CurrentFolder/CurrentFolder'
import GoBackSidebar from './components/GoBackSidebar/GoBackSidebar'
import AllNotes from './components/AllNotes/AllNotes'
import Note from './components/Note/Note'
import { Route } from 'react-router-dom'
import STORE from './store.js'
import "./App.css";


export default class App extends React.Component {
  state = {
    store: STORE
  }
  render() {
    return (
    <div>
      <Route path='/' component={Header} />
      <aside className='folderSidebar'>
        <Route exact path='/' component={FolderList} />
        <Route path='/folder/:folderid' component={CurrentFolder} />
        <Route path='/note/:noteid' component={GoBackSidebar} />
      </aside>
      <main>
        <Route exact path='/' render={notes => <AllNotes notes={this.state.store.notes} />} />
        <Route path='/folder/:folderid' component={Folder} />
        <Route path='/note/:noteid' component={Note} />
      </main>
    </div>
    )
  }
}
