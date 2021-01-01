import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {

  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err))
  }, [])

  // console.log('countries', countries);

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }

  return (
    <div className="app">
      <div className="total-countries">
        <h1>Country Loaded : {countries.length}</h1>
        {/* <h3>Country Added : {cart.length}</h3> */}
        <Cart cart={cart}></Cart>
      </div>
      {
        countries.map(item => <Country country={item} key={item.alpha2Code} handleAddCountry={handleAddCountry}></Country>)
      }
    </div>
  );
}

export default App;
