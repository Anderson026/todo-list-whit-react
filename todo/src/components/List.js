import React from "react";
import { useSelector } from "react-redux";
// importando o componente listItem
import ListItem from "./ListItem";


// criando o componente que mostra a lista
function List(props) {

  const items = useSelector(state=>state);

  return (
    <ul>
      {/* adicionando o novo item a lista */}
      {items.map(item => <ListItem key={item.id} item={item}></ListItem>)}
    </ul>
  )
}

export default List;