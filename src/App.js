import React from "react";
import Header from "./components/Header/Header";
import Folder from "./components/Folder/Folder";
import FolderList from "./components/FolderList/FolderList";
import CurrentFolder from "./components/CurrentFolder/CurrentFolder";
import GoBackSidebar from "./components/GoBackSidebar/GoBackSidebar";
import AllNotes from "./components/AllNotes/AllNotes";
import Note from "./components/Note/Note";
import { Route } from "react-router-dom";
import STORE from "./store.js";
import "./App.css";

export default class App extends React.Component {
  state = {
    store: STORE
  };
  render() {
    return (
      <div>
        <Route path="/" component={Header} />
        <aside className="folderSidebar">
          <Route
            exact
            path="/"
            render={(props, folders) => (
              <FolderList {...props} folders={this.state.store.folders} />
            )}
          />
          <Route path="/folder/:folderid" component={CurrentFolder} />
          <Route path="/note/:noteid" render = {(props, store) => (
            <GoBackSidebar {...props} store={this.state.store} />
          )}
          />

        </aside>
        <main>
          <Route
            exact
            path="/"
            render={(props, notes) => (
              <AllNotes {...props} notes={this.state.store.notes} />
            )}
          />
          <Route
            path="/folder/:folderid"
            render={(props, notes) => {
              return <Folder {...props} notes={this.state.store.notes} />
            }}
          />

          <Route
            path="/note/:noteid"
            render={(props, notes) => (
              <Note {...props} notes={this.state.store.notes} />
            )}
          />
        </main>
      </div>
    );
  }
}
