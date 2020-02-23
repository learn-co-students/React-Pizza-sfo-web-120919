import React from "react"

const PizzaForm = (props) => {

  return(

      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" onChange={props.onPizzaChange} name="topping" value={props.pizza.topping} />
               
                
            
        </div>
        <div className="col">
          <select value={props.pizza.size} name="size" onChange={props.onPizzaChange} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" onChange={props.onVegetarianChange} value="Vegetarian" checked={props.pizza.vegetarian ? true: false }/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={props.onVegetarianChange} type="radio" value="Not Vegetarian" checked={props.pizza.vegetarian ? false:true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.onPizzaSubmit(props.pizza.id)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
