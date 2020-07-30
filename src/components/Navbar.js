import React, {Component} from "react"
import { connect } from 'react-redux'
import { bubble, heap, merge, quick, randomize } from '../store/actions'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.bubbleSort = this.bubbleSort.bind(this)
    this.randomize = this.randomize.bind(this)
  }

  randomize () {
    this.props.randomize()
  }

  bubbleSort () {
    this.props.bubble()
  }

  render() {
    return (
      <div className="navbar">
        <button
          className="btn btn-text"
          style={{ marginLeft: '1em' }}
          onClick={this.randomize}
        >
          Randomize
        </button>
        <div>
          <button
            className="btn btn-option"
          >
            Merge Sort
          </button>
          <button
            className="btn btn-option"
          >
            Heap Sort
          </button>
          <button
            className="btn btn-option"
          >
            Quick Sort
          </button>
          <button
            className="btn btn-option"
            onClick={this.bubbleSort}
          >
            Bubble Sort
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  bubble: () => dispatch(bubble()),
  heap: () => dispatch(heap()),
  merge: () => dispatch(merge()),
  quick: () => dispatch(quick()),
  randomize: () => dispatch(randomize()),
})

export default connect(null, mapDispatchToProps)(Navbar)