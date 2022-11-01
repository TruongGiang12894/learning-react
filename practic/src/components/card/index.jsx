import React,{ useState }  from 'react';
import './style.css';
import { status, statuses } from '../const';



function Card({title,status,desc}) {
    return (

        <div className="card">
            <div className="card-header">
                <h5 className="card-title">Title: {title}</h5>
                <h5 className="card-status"><button >Status:</button> {status}</h5>
            </div>
            <h5>Description: {desc}</h5>

            
        </div>
    );
}

export default Card;