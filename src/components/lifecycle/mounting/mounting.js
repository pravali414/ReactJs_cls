import React, { Component } from "react";

class Mounting extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      message: "Good morning",
      color: "red", // Default color
      posts: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    // Ensure props.color is valid before updating the state
    return props.color ? { color: props.color } : null;
  }

  componentDidMount() {
    // Runs once after the component is mounted
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ posts: response });
      })
      .catch(error => {
        console.error("Error fetching data:", error); // Handling errors
      });
  }

  render() {
    console.log("render", this.state.posts);
    return (
      <>
        <h2 style={{ color: this.state.color }}>
          Mounting: {this.state.message}
        </h2>
        {this.state.posts.length > 0 ? (
          <>
            {this.state.posts.map((eachPost) => {
              return <h2 key={eachPost.id}>{eachPost.title}</h2>;
            })}
          </>
        ) : (
          <h2>Please wait... loading...</h2>
        )}
      </>
    );
  }
}

export default Mounting;
