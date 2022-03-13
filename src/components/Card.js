import chipLight from '../img/chip-light.svg';
import Bitcoin from '../img/vendor-bitcoin.svg';
import Blockchain from '../img/vendor-blockchain.svg';
import Evil from '../img/vendor-evil.svg';
import Ninja from '../img/vendor-ninja.svg';






function Card(props) {

    const { card, selectCard, removeCard, selected } = props
    var className = "card";

    var cardMakeLogo = ""
    if (card.cardMake !== undefined) {
      
        className += " " + card.cardMake;

        if (card.cardMake === "Bitcoin") {
            cardMakeLogo = Bitcoin;
        }
         if (card.cardMake === "Blockchain") {
            cardMakeLogo = Blockchain;
        }
        else if (card.cardMake === "Evil") {
            cardMakeLogo = Evil;
        }
        else if (card.cardMake === "Ninja") {
            cardMakeLogo = Ninja;
        }
    }
    if(selected) {
        className+=" selected"  //om detta kortet är selected så lägger vi till class selected och kan se den i CSS
    }

    //tar bort kort från Home. 
    function removeThisCard(){
        removeCard(card)
    }

    //skickar kortet till app där det blir valt/selectat/aktivt från stacken. 
    function selectThisCard(){
        selectCard(card)
    }

    return (

        //(kolla om detta finns) ? (om det finns visa detta) : (annars visa detta) på kortet i addcard 
        <div className={className} onClick={selectThisCard}>

            <p className='delete' onClick={removeThisCard}>Delete</p>
            <img src={chipLight} alt="chip" className='cardchip'></img>
            <img src={cardMakeLogo} alt="cardMake" className='cardMaker'></img>
            <h2 className="cardHolderNumber"> {card.cardNumber ? card.cardNumber : "**** **** **** ****"} </h2>
            <h4 className="cardHolder"> {card.cardName ? card.cardName : "YOUR NAME"} </h4>
            <h5 className="cardValidThru"> {card.cardExpiry ? card.cardExpiry : "YY/MM"} </h5>
            <h4 className="cardValidDate"> {card.cardMake ? card.cardMake : "CHOOSE BANK"} </h4>


        </div>

    )
}

export default Card;