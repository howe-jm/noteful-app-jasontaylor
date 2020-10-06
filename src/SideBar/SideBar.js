import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar(props) {
  if (props.newFolder || props.newNote) {
    return (
      <div className='sidebar'>
        <button> Back </button>
      </div>
    );
  } else {
    console.log(props);

    const folderData = props.storeData.folders;
    const folders = folderData.map(folder => {
      return (
        <li key={folder.id} className='folderList-item'>
          <Link to={folder.name}> {folder.name} </Link>
        </li>
      );
    });
    return (
      <div className='sidebar'>
        <ul className='folderList'>
          {folders}
          <li>
            <button onClick={() => props.addNewFolder()}> Add New Folder</button>
          </li>
        </ul>
      </div>
    );
  }
}
