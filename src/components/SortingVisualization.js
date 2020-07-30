import React, {Component} from "react"
import { connect } from 'react-redux'

class SortingVisualization extends Component {
  render() {
    const { array } = this.props
    console.log(array)
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

const mapStateToProps = (state) =>{
  return {
      array: state.array
  } 
}

export default connect(mapStateToProps)(SortingVisualization)