import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          
            {this.props.pizzas.map(p => <Pizza onEditPizza={this.props.onEditPizza} key={Math.random()} pizza={p} />)}
          
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
