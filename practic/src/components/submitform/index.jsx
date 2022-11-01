import React, { useState } from "react";
import PropTypes from "prop-types";
import './style.css';
import { status, statuses } from '../const';
import Card from "../card";

function Form() {
    const [taskInfo, setTask] = useState(status)
    function render() {
        console.log(taskInfo);
    }
    function handleInfo1(e) {
        setTask({
            ...taskInfo,
            title: e.target.value
        })
    }
    function handleInfo2(e) {
        setTask({
            ...taskInfo,
            desc: e.target.value
        })
    }
    return (
            <div>
                <label htmlFor="title">Title:</label>
                <input onChange={handleInfo1} type="text" id="title" /><br />
                <label htmlFor="desc">Description:</label>
                <input onChange={handleInfo2} type="text" id="desc" /><br />
            <button onClick={render}>Create !</button>
            {/* <h3>{ taskInfo}</h3> */}
            </div>

    );
}


export default Form;
