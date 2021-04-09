import React from "react"

function Card({ number, shape, shapeColour }) {
  return (
    <div className="card">
      <img src={shape} alt={shape} />
      <h1 className={shapeColour(shape)}>{number}</h1>
    </div>
  )
}

export default Card
