import React, {Component} from "react"

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <button className="btn btn-text" style={{ marginLeft: '1em' }}> Randomize </button>
        <div>
          <button className="btn btn-option"> Merge Sort </button>
          <button className="btn btn-option"> Heap Sort </button>
          <button className="btn btn-option"> Quick Sort </button>
          <button className="btn btn-option"> Bubble Sort </button>
        </div>
      </div>
    )
  }
}

export default Navbar