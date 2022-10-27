import React from "react";
import './style.css'
function Headerbar() {
    return (
        <div className="header">
            <div className="create-task">Create new task</div>
            <div className="search">
                <input type="text" />
                <div>Search</div>
            </div>
        </div>
    )
};
export default Headerbar;