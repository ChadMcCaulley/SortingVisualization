import React, {Component} from "react"
import { connect } from 'react-redux'

class SortingVisualization extends Component {
  render() {
    const { array } = this.props
    console.log(array)
    return (
      <div className="array-container">
        { array.map((obj, index) => {
          let itemClass = "array-bar "
          if (obj.comparing) itemClass += 'comparing'
          return (
          <div
            className={itemClass}
            key={index}
            style={{ height: `${obj.height}px`}}
          />
        )})}
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