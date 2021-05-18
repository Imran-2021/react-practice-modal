import React, { useState } from 'react';
import Backdrop from './Backdrop';
import Model from './Model';

const Todo = (props) => {
    const [modal,setModal] = useState(false);
    function deletehandler(){
        setModal(true);
    }
    function close(){
        setModal(false);
    }
    return (
        <div className="card">
        <h2>{props.text}</h2>
        <div className="action">
        <button className="btn" onClick={deletehandler} >Delete</button>
        </div>
        {
            modal && <Model onClick={close}/>
        }
        {
            modal && <Backdrop onClick={close} />
        }
        
      </div>
    );
};

export default Todo;