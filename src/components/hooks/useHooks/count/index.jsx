import React, { useEffect, useState } from "react";

function CountEffect() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log('alalalal')

  },[count])
  return (
    <div>
      <p>Contador {count} </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <br />
      <button onClick={() => setCount(0)}>resetar</button>
    </div>
  );
}
export default CountEffect;
