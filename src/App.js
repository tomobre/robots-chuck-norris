import React from "react";
import Joke from "./Joke";
import styled from "styled-components/macro";

const Button = styled.button`
  border: 0;
  border-radius: 0.375rem;
  padding: 1rem 2rem;
  font-size: 1.15rem;
  background-color: #edf2f7;
  margin-bottom: 2vh;
  margin-top: 2vh;

  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 30%;
`;

class App extends React.Component {
  state = { jokes: [], isLoaded: true, error: null };

  handleGetJoke = () => {
    this.setState({ isLoaded: false });
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(({ id, value }) => {
        const newJoke = { id, value };
        this.setState({
          jokes: [newJoke, ...this.state.jokes],
          isLoaded: true,
          error: null,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: err, isLoaded: true });
      });
  };

  render() {
    const { jokes, isLoaded, error } = this.state;
    return (
      <Wrapper>
        <Button onClick={this.handleGetJoke}>
          {isLoaded ? "Give me the joke " : "Loading..."}
        </Button>
        {error && <p>Something went wrong, error: {error}</p>}
        {jokes.length >= 1 &&
          jokes.map((joke) => <Joke key={joke.id} data={joke}></Joke>)}
      </Wrapper>
    );
  }
}

export default App;
