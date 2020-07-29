import React, {Component} from "react"

class SortingVisualization extends Component {
  constructor(props) {
    super(props)
    this.state = {
      array: []
    }
  }

  componentDidMount () {
    this.randomizeArray()
  }

  /**
   * Randomize the integer in state
   */
  randomizeArray () {
    const array = []
    for (let i = 0; i < 200; i++) {
      array.push(this.randomIntFromInterval(5, 800))
    }
    this.setState({ array })
  }

  /**
   * Get a random integer from a given range
   * @param {Number} min 
   * @param {Number} max 
   */
  randomIntFromInterval (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  render() {
    const { array } = this.state
    return (
      <div className="array-container">
        { array.map((value, index) => (
          <div
            className="array-bar"
            key={index}
            style={{ height: `${value}px`}}
          />
        ))}
      </div>
    )
  }
}

export default SortingVisualization