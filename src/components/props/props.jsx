//aula de props no react, alguns racunhos e pedaços de código abaixo

//usando ternário
// function Filho({ approved }) {
//   return (
//     <>
//       {approved ? (
//         <img src="https://s.dicio.com.br/feliz.jpg" alt=":)" />
//       ) : (
//         <img
//           src="https://i.pinimg.com/236x/ed/3a/a5/ed3aa50725c29292b24c483b1012a1f3.jpg"
//           alt=":("
//         />
//       )}
//     </>
//   );
// }

//usando props com evento
// function Filho({ onAlert }) {
//   return <button onClick={onAlert}>alalal</button>;
// }

// export default function App() {
//   const handleAlert = () => alert("receba graças a Deus pai");
//   return <Filho onAlert={handleAlert} />;
// }

function Filho({ name="world"}){
  return <p>ola {name}</p>

}
export default function App(){
  return <Filho/>

}


