import React from 'react';
import Note from '../Note/Note';

export default class Folder extends React.Component {
  render() {

    const folder = this.props.storeData.folders.filter(object => object.name === this.props.match.params.folderName);
    const folderId = folder[0].id;


    return (
      <div>
        {this.props.match.params.folderName}
        <Note notes={this.props.storeData.notes} folderId={folderId}/>
      </div>
    );
  }
}
