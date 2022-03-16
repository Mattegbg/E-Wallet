import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';


import Home from './views/Home';
import AddCard from './views/AddCard';
import { useEffect, useState } from 'react';

function App() {


  //all info om mina kort
  const [cards, setCards] = useState([])
  const [selected, setSelected] = useState({})

  //useEffect - varjegång något uppdateras gör vi en funktion. Kommer senare användas i localstorage / callback.
  useEffect(() => {
    function loadFromLocalStorage() {
      let cardsFromStorage = JSON.parse(localStorage.getItem("cards")) //localstorage del 2: hämtar datan du skickat/sparat in på webben och sätter vårat state till datan/skickar tillbaka infon. 
      if(cardsFromStorage !== null && cardsFromStorage.length > 0) {
        setCards(cardsFromStorage);
        setSelected(cardsFromStorage[0]);
      }
    }
    loadFromLocalStorage()
  }, [])

  // localStorage del 1; sparar vår info i localstorage/webbläsaren. 
  useEffect(() => {
    function saveToLocalStorage() {
      localStorage.setItem("cards", JSON.stringify(cards))
    }
    saveToLocalStorage()
  }, [cards])

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


  //lägger nya kort i state som går till Home sen. 
  function addCard(card) {
    card.id = cards.length + 1  //lägger till id baserat på mängden kort. problem som kan uppstå är att man kan ta bort flera kort med samma nummer 
    let newCards = cards.concat(card)
    setCards(newCards)

  }

//ta bort korten i Home
function removeCard(card){
  if(cards.length > 1) {
    let newCards=cards.filter(c=> c.cardNumber!==card.cardNumber)
    setCards(newCards)
    setSelected(newCards[0])
  }
  else {
    setCards([])
    setSelected({})
  }
  

}


  //väljer kort ur cardStacken. vi vill lägga selected på det kort vi vill lyfta fram.  
  function selectCard(card) {
    setSelected(card)


  }

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home headline="E-WALLET" cards={cards} selectCard={selectCard} selected={selected} removeCard={removeCard} />} />
        <Route path="/addcard" element={<AddCard headline="ADD A NEW BANK CARD" addCard={addCard} />} />
      </Routes>

    </div>
  );
}

export default App;
