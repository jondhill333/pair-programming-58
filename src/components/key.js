import React from 'react';


function Key(props) {
  return (
    <button onClick={props.func} className={props.name}>
      {props.icon}
        
    </button>
  );
}

export default Key;