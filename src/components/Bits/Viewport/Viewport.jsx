import React from 'react';
import './Viewport.css';

const Viewport = ({children}) => {
    return (
        <div id="viewport">
            {children}
        </div>
    )
}

export default Viewport;