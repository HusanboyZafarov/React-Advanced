import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import CartContext from "./context/cartContex";
import Login from "./context/Login";

class App extends Component {
  handleLoggedIn = (username) => {
    console.log("Getting the user by this", username);
    const user = {
      name: "Safir",
    };
    this.setState({ currentUser: user });
  };
  state = {
    currentUser: null,
  };
  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}
export default App;
