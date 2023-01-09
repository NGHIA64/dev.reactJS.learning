import React from "react";
class AddComponent extends React.Component{
    state = {
        name: ''
    }
    changeState(event){
        console.log(event.target.value)
        this.setState(
          {
            name : event.target.value
          }
        )
      }
      checkInput = (event) => {
        event.preventDefault()
        console.log({
            id: Math.floor(Math.random() * 1001),
            name: this.state.name
        })
        this.props.addNewArr({
            id: Math.floor(Math.random() * 1001),
            name: this.state.name
        })
        this.setState({
            name: ''
        })
      }
render(){
    return (
        <div>
        <input onChange={(event) => this.changeState(event)}>          
        </input>
        {this.state.name}
        <input type='submit' onClick={(event) => this.checkInput(event)}></input>
      </div>
    )
}


}
export default AddComponent