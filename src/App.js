import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    currentPizza: {
      id: "",
      topping: "",
      size: "",
      vegetarian: false
     }

  }

  onEditPizza = (pizzaId) => {
    
    const pizza = this.state.pizzas.find(p => p.id === pizzaId)
    
    this.setState((prevState) => {
          return {
            ...prevState,
            currentPizza: pizza
          }
    })
  }

  onVegetarianChange = (e) => {
    const vegStatus = e.target.value
    // if vegStatus
    let newVegBool;
    if (vegStatus === "Vegetarian" ) newVegBool = true
    else newVegBool = false

    this.setState((prevState) => {
      return {
        ...prevState,
        currentPizza: {
          ...prevState.currentPizza,
          vegetarian: newVegBool
        }
      }
    })
   

  }

  patchPizza = () => {
    const configuration = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state.currentPizza)
    }
    fetch(`http://localhost:3000/pizzas/${this.state.currentPizza.id}`, configuration).catch(err => console.log(err))

  }


  onPizzaChange = (e) => {
    const name = e.target.name
    const value = e.target.value


    console.log("onPizzaChange called")
    //debugger
    this.setState((prevState => {
      return {
        ...prevState,
        currentPizza: {
          ...prevState.currentPizza,
          [name]: value
        }
      }
    }))
  }

  onPizzaSubmit = (pizzaId) => {
    
   
    console.log("onpizzasubmit called")
    //debugger
    
    this.setState((prevState) => {
      return {

        ...prevState,
        pizzas: prevState.pizzas.map((p) => {
          if (p.id !== pizzaId) return p
          else {
            return {
              
                ...p,
                topping: prevState.currentPizza.topping,
                vegetarian: prevState.currentPizza.vegetarian,
                size: prevState.currentPizza.size    
            }
          }
        })

      }
    })
    this.patchPizza()
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas").then(resp => resp.json()).then(data => this.setState((prevState => {
      return {
        pizzas: data
      }
    })))
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm onVegetarianChange={this.onVegetarianChange} onPizzaChange={this.onPizzaChange} onPizzaSubmit={this.onPizzaSubmit} pizza={this.state.currentPizza}/>
        <PizzaList onEditPizza={this.onEditPizza} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
