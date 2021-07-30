import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../actions/listAction";

// criando o componente para mostrar o formulário no frontend
function TodoForm(props) {

  // criando o estado para mudar os itens da lista
  const [text, setText] = useState("");
  
  const dispatch = useDispatch();

  // função para pegar o dado do input
  function handlechange(event) {
    // pega o texto do input
    let text1 = event.target.value;
    // altera o texto na lista
    setText(text1);
  }
  // função para adicionar o item na lista
  function addItemEvent(event) {
    event.preventDefault();
    // verifica se tem um text
    if (text) {
      // setItems([...items, text]);
      dispatch(addItem(text));
      setText("");
      props.onHideModal();
    }
  }

  return (
    <form>
      <input onChange={handlechange} type="text" value={text}></input>
      <button onClick={addItemEvent}>Add</button>
    </form>
  )
}

export default TodoForm;