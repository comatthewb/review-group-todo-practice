import React from "react";
import axios from "axios";

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

  componentDidMount() {
    axios
      .get("/home")
      .then(results => {
        console.log(results.data[0].itemName);
        let array = [];
        let newState = results.data.map(item => {
          array.push(item.itemName);
        });
        console.log(array);
        this.setState({
          gList: array
        });
      })
      .catch(console.log);
  }

  addItem() {
    let data = this.state.groceryItem;
    // console.log(this.state.groceryItem);
    axios
      .post("/post", { data })
      .then(response => {
        this.setState({
          gList: [...this.state.gList, this.state.groceryItem],
          groceryItem: ""
        });
      })
      .catch(function(error) {
        console.log(error);
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
        <button onClick={this.addItem} id="itemSubmit">
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
