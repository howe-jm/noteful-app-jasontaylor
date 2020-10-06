import React from 'react';

export default function Main(props) {
    const storeData = props.storeData.notes;
    const notes = storeData.map(note => {
        const formattedTime = new Date(note.modified).toLocaleDateString([], 'long');
        return (
            <li className='notes' key={note.id}>
                <p>{note.name}</p>
                <p>Modified: {formattedTime}</p>
                <button>Delete</button>
            </li>
        )
    })
    return (
        <div>
            <ul className='noteList'>{notes}</ul>
        </div>
    )
}

