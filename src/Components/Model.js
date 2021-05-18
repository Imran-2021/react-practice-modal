import React from 'react';

const Model = (props) => {
    return (
        <div className="model">
            <p>Are you sure ? </p>
            <button className="btn btn--alt" onClick={props.onClick}>Cancel</button>
            <button className="btn" onClick={props.onClick}>Confirm</button>
        </div>
    );
};

export default Model;