import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';


import Home from './views/Home';
import AddCard from './views/AddCard';
import { useState } from 'react';

function App() {

  const [cards, setcards] = useState([])

  // let cards = [
  //   {
  //     cardNumber: "1234 4566 4433 2222",
  //     cardName: "kalle kula",
  //     cardExpiry: "12/30",
  //     cardCvv: "123",
  //     cardMake: "Bitcoin Inc",
  //   },
  //   {
  //   cardNumber: "2222 2222 2222 2222",
  //     cardName: "erik eriksson",
  //     cardExpiry: "13/44",
  //     cardCvv: "125",
  //     cardMake: "johans bank",
  //   },
  //   {
  //     cardNumber: "5555 5555 5555 5555",
  //       cardName: "Gunter wonderbar",
  //       cardExpiry: "15/22",
  //       cardCvv: "323",
  //       cardMake: "jaa bank",
  //     },
  // ]

  return (
    <div className="App">

  <Routes>  
    <Route path="/" element={ <Home headline="E-WALLET" cards={cards}  /> } />
    <Route path="/addcard" element={ <AddCard headline="ADD A NEW BANK CARD" setcards={setcards} /> } />
  </Routes>   
      
    </div>
  );
}

export default App;
