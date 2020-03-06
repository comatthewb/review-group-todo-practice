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
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    axios
      .get("/home")
      .then(results => {
        let array = [];
        let newState = results.data.map(item => {
          array.push(item.itemName);
        });

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
          gList: [...this.state.gList, data],
          groceryItem: ""
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    document.getElementById("GroceryInput").focus();
  }

  deleteItem() {
    console.log("delete handler fired");
    axios.delete("/delete", )

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
            <li key={index}>
              {item}
              <button key={index} onClick={this.deleteItem}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
