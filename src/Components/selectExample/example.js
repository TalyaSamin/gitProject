import React from 'react';
import Select from 'react-select';
import "./example.css"
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const App = () => {
  const state = null;
  const handleChange = state => {
    console.log(`Option selected:`, state);
  };

  return (
    <>
      <Select
        value={state}
        onChange={handleChange}
        options={options}
      />
      <i class="fas fa-shopping-cart"></i>

      <div class="page-wrapper">
        <button id="addtocart">
          Add to Cart
    <span class="cart-item"></span>
        </button>
      </div>

      
    </>
  )
}
export default App