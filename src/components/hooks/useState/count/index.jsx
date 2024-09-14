import React, { useState } from 'react';

function Contador() {
 const [count, setCount] = useState(0);
 return (
  <div>
      <p>Contador {count} </p>
      <button onClick={() => setCount(count + 1)}>+1</button><br />
      <button onClick={() => setCount(0)}>resetar</button>
  </div>

 )

}
export default Contador;

