import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gList: [],
      groceryItem: ""
    };
    this.addItem = this.addItem.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }
  addItem() {
    this.setState({
      gList: [...this.state.gList, this.state.groceryItem],
      groceryItem: ""
    });
    document.getElementById("GroceryInput").focus();
  }

  inputHandler(event) {
    this.setState({
      groceryItem: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <input
          id="GroceryInput"
          placeholder="add item"
          onChange={this.inputHandler}
        />
        <button onClick={this.addItem} id="submit">
          submit
        </button>
        <ul>
          {this.state.gList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
