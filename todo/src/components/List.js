import React from "react";
// importando o componente listItem
import ListItem from "./ListItem";


// criando o componente que mostra a lista
function List(props) {

  return (
    <ul>
      {/* adicionando o novo item a lista */}
      {props.items.map(item => <ListItem key={item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted}></ListItem>)}
    </ul>
  )
}

export default List;