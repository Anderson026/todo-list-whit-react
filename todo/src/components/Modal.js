import Card from "./Card";

// criando o componente de modal para adicionar as tarefas
function Modal(props) {

  function hideModal(event) {
    let target = event.target;
    if(target.id === "modal") {
      props.onHideModal();
    }
    console.log(target);
  }

  return (
    <div id="modal" onClick={hideModal} className={props.show ? "modal": "modal hideModal"}>
      <Card className="cardModal">
        {props.children}
      </Card>
    </div>
  )
}

export default Modal;