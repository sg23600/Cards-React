import "./App.scss"
import { React, Component } from "react"
import Card from "./Components/Card.js"
import heart from "./Components/img/Heart.png"
import club from "./Components/img/Club.png"
import diamond from "./Components/img/Diamond.png"
import spade from "./Components/img/Spade.png"

let cards = new Array(52)

for (let i = 0; i < 52; i++) {
  cards[i] = i + 1
}
// shuffle
cards.sort(() => Math.random() - 0.5)

const shapeDict = {
  0: "club",
  1: "diamond",
  2: "heart",
  3: "spade",
}
const getShape = {
  heart: heart,
  club: club,
  diamond: diamond,
  spade: spade,
}
const numberDict = {
  1: "ace",
  11: "jack",
  12: "queen",
  0: "king",
}
const generateCards = (arg) => {
  let shape = [] //new Array()
  let number = [] //new Array()
  for (let i = 0; i < 5; i++) {
    let iter = i + arg * 5

    Math.floor(cards[iter] / 13) !== 4
      ? shape.push(shapeDict[Math.floor(cards[iter] / 13)])
      : shape.push(shapeDict[0])

    cards[iter] % 13 > 1 && cards[iter] % 13 < 11
      ? number.push(cards[iter] % 13)
      : number.push(numberDict[cards[iter] % 13])
  }
  return { shape, number }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      stack: 52,
      count: 0,
      data: [],
    }
  }
  shapeColour = (shape) => {
    if (shape === heart || shape === diamond) {
      return "red"
    }
    return "black"
  }

  drawCards = () => {
    // let tray = document.getElementById("cards")
    // tray.style.display = "flex"
    let data = {}
    if (5 * this.state.count <= 52) {
      data = generateCards(this.state.count)
      let newCards = this.state.data
      for (let i = 0; i < 5; i++) {
        if (data.number[i])
          newCards.push({
            number: data.number[i].toString(),
            shape: data.shape[i],
          })
      }
      this.setState(
        {
          count: this.state.count + 1,
          stack: this.state.stack === 2 ? 0 : this.state.stack - 5,
          data: newCards,
        },
        () => {
          console.log(this.state)
        }
      )
    }
  }
  render() {
    return (
      <div>
        <div className="top-stick">
          <h1 className="welcome">Welcome to the Card Game!</h1>
          <p className="sub">You have {this.state.stack} cards left</p>
        </div>

        <div className={`cards ${this.state.count === 0 && "block"}`}>
          {this.state.data.map((item, i) => (
            <Card
              className="card"
              number={item.number}
              shape={getShape[item.shape]}
              shapeColour={this.shapeColour}
            />
          ))}
        </div>
        <div className="btn-div">
          <button
            className={`btn ${this.state.stack === 0 && "over"}`}
            onClick={() => this.drawCards()}
          >
            Draw 5!
          </button>
        </div>
      </div>
    )
  }
}

export default App
