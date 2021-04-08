import React from "react"
// import heart from "./img/Heart.png"
// import club from "./img/Club.png"
// import diamong from "./img/Diamond.png"
// import spade from "./img/Spade.png"

// cardType = (shape)

function Card({ number, shape, shapeColour }) {
  return (
    <div className="card">
      <img src={shape} alt={shape} />
      <h1 className={shapeColour(shape)}>{number}</h1>
    </div>
  )
}

export default Card
