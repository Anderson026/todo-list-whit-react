// importando o React
import React, { useState } from "react";
// importando o css
import "./Todo.css";
// importando o componente da lista dos itens
import List from "./List";
// importando o componente de formulário
import TodoForm from "./TodoForm";
// criando a função como componente
function Todo() {
  
  // criando o estado para adicionar os itens a lista
  const [items, setItems] = useState([]);

  function onAddItem(item) {
    setItems([...items, item]);
  }

  return(
    <div className="container">
      <h1>Todo</h1>

      <TodoForm onAddItem={onAddItem}></TodoForm>
      <List items={items}></List>
    </div>
  )
}

// exportando a função
export default Todo;