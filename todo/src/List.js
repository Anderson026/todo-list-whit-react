import React from "react";

// criando o componente que mostra a lista
function List(props) {
  return (
    <ul>
      {/* adicionando o novo item a lista */}
      {props.items.map(item => <li>{item}</li>)}
    </ul>
  )
}

export default List;