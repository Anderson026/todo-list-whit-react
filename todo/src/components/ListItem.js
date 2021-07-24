import React from "react";
// importando o componente card
import Card from "./Card";
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

  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
          <button onClick={() => { props.onItemDeleted(props.item) }}><img alt="delete" src="./assets/bin.png"></img></button>
        </div>
      </Card>
    </li>
  )
}

export default ListItem;