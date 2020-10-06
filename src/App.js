import React from 'react';
import './App.css';
import storeData from './STORE';
import { Route } from 'react-router-dom';

import Folder from './Folder/Folder';
import Main from './Main/Main';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeData,
      newFolder: false,
      newNote: false,
    };
  }

  addNewFolder = () => {
    this.setState({
      newFolder: true,
    });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <main className='main'>
        <SideBar
          storeData={this.state.storeData}
          newFolder={this.state.newFolder}
          newNote={this.state.newNote}
          addNewFolder={this.addNewFolder}
        />
        <Route
          exact
          path='/'
          component={props => <Main storeData={this.state.storeData} />}
        />
        <Route
          path='/:folderName'
          component={props => (
            <Folder {...props} storeData={this.state.storeData} />
          )}
        />
        </main>
      </div>
    );
  }
}
