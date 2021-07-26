import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          users: json,
        })
      })
  }

  ShowInformation(){
    document.getElementById('information').removeAttribute('hidden');
  }

  HideInformation(){
    document.getElementById('information').setAttribute('hidden', 'hidden');   
  }
  render() {
    var { isLoaded, users } = this.state;

    const isCompleted = (state) => {
      if (state) {
        return <td>Yes</td>
      } else {
        return <td>No</td>
      }
    }

    if (!isLoaded) {

      return (
        <div className="App">
          <div class="container">
            <div class="row">
              <div class="col">
                <h1>Loading...</h1>
              </div>
            </div>
          </div>
        </div>
      );

    } else {

      return (
        <div className="App" >
          <div class="container">
          <div class="row">
              <div class="col p-4">
                <button type="button" class="btn btn-primary" onClick={this.HideInformation}>Quitar información</button>
              </div>
              <div class="col p-4">
                <button type="button" class="btn btn-success" onClick={this.ShowInformation}>Mostrar información</button>
              </div>
          </div>
            <div class="row">
              <div class="col mb-4">
                <table class="table table-dark" id="information">
                  <thead>
                    <tr>
                      <th scope="col">User Id</th>
                      <th scope="col">Id</th>
                      <th scope="col" >Title</th>
                      <th scope="col">Completed?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      users.map(user => (
                        <tr>
                          <th scope="row">{user.userId}</th>
                          <td>{user.id}</td>
                          <td>{user.title}</td>
                          {isCompleted(user.completed)}
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
 

export default App;
