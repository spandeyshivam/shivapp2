import React, { useState } from 'react';
      
export function SampleInput() {
  const      [name, setName] = useState('Ravi');
      
  function handleChange(e)  {
    e.preventDefault();
      
    setName(e.target.value);
  };
      
  return (
     <div>
        Name:
        <input
          type='text'
          value={name}
          onChange={handleChange}/>
      </div>
      <div>Name is: {name}</div>
                
  );
}
export default SampleInput;