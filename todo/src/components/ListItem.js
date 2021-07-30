import React from "react";
import { useDispatch } from "react-redux";
// importando o componente card
import Card from "./Card";

import { deleteItem, changeDone } from "../actions/listAction";
// função para marcar a tarefa completa ou imcompleta
function DoneImg(props) {

  if(props.done) {
    return <img alt="done" src="./assets/on.png"></img>
  } else {
    return <img alt="undone" src="./assets/off.png"></img>
  }

}

// criando o componente que mostra a lista
function ListItem(props) {

  const dispatch = useDispatch()

  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button onClick={() => { dispatch(changeDone(props.item.id)) }}><DoneImg done={props.item.done}></DoneImg></button>
          <button onClick={() => { dispatch(deleteItem(props.item.id)) }}><img alt="delete" src="./assets/bin.png"></img></button>
        </div>
      </Card>
    </li>
  )
}

export default ListItem;