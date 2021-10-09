import "./QuantityInput.css"

const QuantityInput = (props) => {

 
    return (
     
  <input type="number" className="quantity-input-custom" {...props} min={1} max={props.quantity} step={1}  />


    )
}

export default QuantityInput

