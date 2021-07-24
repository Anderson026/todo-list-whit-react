// importando o React
import React, { useEffect, useState } from "react";
// importando o css
import "./Todo.css";
// importando o componente da lista dos itens
import List from "./components/List";
// importando o componente de formulário
import TodoForm from "./components/TodoForm";
// importando a classe de Item
import Item from "./components/Item";
// importando o componente de modal
import Modal from "./components/Modal";

const SAVED_ITEMS = "savedItems";

// criando a função como componente
function Todo() {
  // criando um estado para mostrar o modal
  const [showModal, setShowModal] = useState(false);
  // criando o estado para adicionar os itens a lista
  const [items, setItems] = useState([]);
  // pega os dados do input para o localStorage
  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if(savedItems) {
      setItems(savedItems);
    }
  }, []);

  // salvando os dados no localStorage
  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  }, [items])

  function onAddItem(text) {
    // criando uma nova instância de item
    let it = new Item(text);

    setItems([...items, it]);
    onHideModal();
  }

  function onItemDeleted(item) {
    let filteredItems = items.filter(it => it.id !== item.id);
    setItems(filteredItems);

  }

  function onDone(item) {
    let updatedItems = items.map(it => {
      if(it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    })

    setItems(updatedItems);
  }

  // função para esconder o modal ao clicar na área externa do modal
  function onHideModal() {
    setShowModal(false);
  }

  return(
    <div className="container">
      <header className="header">
      <h1>Todo</h1>
      <button onClick={()=>{setShowModal(true)}} className="addButton">+</button>
      </header>
      

      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

      <Modal show={showModal} onHideModal={onHideModal}>
        <TodoForm onAddItem={onAddItem}></TodoForm>
      </Modal>
    </div>
  )
}

// exportando a função
export default Todo;