import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class ParentComponent extends React.Component {
  state = {
    name: "",
    array: [
      {id: 1, name: "array1"},
      {id: 2, name: "array2"},
      {id: 3, name: "array3"}
    ]
  };

  addNewArr = (job) => {
    this.setState(
      {array: [...this.state.array, job]}
    )
  }
  
  render() {
    return (
      <>
      <AddComponent addNewArr={this.addNewArr}/>
      <ChildComponent age="20" name="Prop Name" arr={this.state.array}/>
      </>
    )
  }
}
export default ParentComponent;
