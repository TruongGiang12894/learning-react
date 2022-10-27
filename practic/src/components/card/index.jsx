import React from 'react';
import './style.css';
Card.propTypes = {
    // name: PropTypes.number
};
const props = [
    {
        Tittle: 'Task 1',
        Status: 'New',
        Description: '......'
    }, {
        Tittle: 'Task 2',
        Status: 'New',
        Description: '......'
    }, {
        Tittle: 'Task 3',
        Status: 'New',
        Description: '......'
    }, {
        Tittle: 'Task 4',
        Status: 'New',
        Description: '......'
    }, {
        Tittle: 'Task 5',
        Status: 'New',
        Description: '......'
    }, {
        Tittle: 'Task 6',
        Status: 'New',
        Description: '......'
    }
]
function Card() {
    return (
        props.map(item => (
            
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Title: {item.Tittle}</h5>
                    <h5 className="card-status">Status: {item.Status}</h5>
                    </div>
                    <h5>Description: {item.Description}</h5>
            </div>
        
        ))
    );
}

export default Card;