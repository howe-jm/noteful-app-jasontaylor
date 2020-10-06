import React from 'react';


export default function SideBar(props) {
    const folderData = props.storeData.folders;
    const folders = folderData.map(folder => {
        return (
            <li key={folder.id} className='folderList-item'>
                {folder.name}
            </li>
        )
    })
    return (
        <div className='sidebar'>
            <ul className='folderList'>{folders}</ul> 
        </div>
    )
}