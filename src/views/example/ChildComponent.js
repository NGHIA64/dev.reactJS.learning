import React from "react";
class ChildComponent extends React.Component {
  state = {
    show: true
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
    console.log(this.state)
  }
  handleShowHide(){
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    var {show} = this.state
    var {arr} = this.props
    return (
        <>
        {show === false ? 
        <div>
        <button onClick={(event) => this.handleShowHide(event)}>Show</button> 
        </div>
        : 
        <>
        <button onClick={(event) => this.handleShowHide(event)}>Hide</button>
        <div>
            {
            
            arr.map( (item, index) => {
        return (
            <div key={item.id}>
                {item.id}  {item.name} {index}
            </div>
        )
    })}
        </div>
        </>
        }
        </>
    )
  }
}
export default ChildComponent;
