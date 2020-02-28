import React from 'react';


function Key({icon, click}) {
  return (
    <button onClick={click}>
      {icon}
        
    </button>
  );
}

export default Key;