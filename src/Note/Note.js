import React from 'react';

export default function Note(props) {
   const notes = props.notes.filter(note => note.folderId === props.folderId).map(note => {
        const formattedTime = new Date(note.modified).toLocaleDateString([], 'long');
        return (
            <li className='notes' key={note.id}>
                    <h2>{note.name}</h2>
                    <p>Modified: {formattedTime}</p>
                <button className='delete-button'>Delete</button>
            </li>
        )
    })
    return (
        <div className='noteList'>
           <ul>
                {notes}   
            </ul> 
            <button> Add Note </button>
        </div>
    )
}
