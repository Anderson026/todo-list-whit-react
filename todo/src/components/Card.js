import React from "react"
// criando o componente de card
function Card(props) {
  return <div className={ props.className ? `${props.className} card` : "card" } >
    {props.children}
  </div>
}

export default Card;