import React from 'react';
import './Sidebar.css'

function Sidebar(props) {
    return(
        <div className="Sidebar">
            {props.children}
        </div>
    )
}

export default Sidebar;