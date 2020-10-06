import React from 'react';

export default class Folder extends React.Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <h1> Folders </h1>
      </div>
    );
  }
}
