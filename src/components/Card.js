import chipLight from '../img/chip-light.svg';
import Bitcoin from '../img/vendor-bitcoin.svg';
import Blockchain from '../img/vendor-blockchain.svg';
import Evil from '../img/vendor-evil.svg';
import Ninja from '../img/vendor-ninja.svg';






function Card(props) {

    const { card, selectCard, removeCard, selected } = props
    var className = "card";

    var cardMakeLogo = Bitcoin;
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
        <div className='motherDiv'>
            <div className='deleteButton'>
                <p className='delete' onClick={removeThisCard}>Delete</p>
            </div>
            <div className='cardbox'>
                <div className={className} onClick={selectThisCard}>
                
                                


                    <img src={chipLight} alt="chip" className='cardchip'></img>
                    <img src={cardMakeLogo} alt="cardMake" className='cardMaker'></img>
                    <p className="cardHolderNumber"> {card.cardNumber ? card.cardNumber : "**** **** **** ****"} </p>
                    
                    <div className='nameMonthText'>
                        <div className='cardHname'>
                            <p>CARDHOLDER NAME</p>
                            <p className="cardHolder"> {card.cardName ? card.cardName : "FIRSTNAME LASTNAME"} </p>
                        </div>
                        <div className='yymm'>
                            <p>VALID THRU</p>
                            <p className="cardValidThru"> {card.cardExpiry ? card.cardExpiry : "YY/MM"} </p>
                        </div>
                    </div>

                    {/* <h4 className="cardValidDate"> {card.cardMake ? card.cardMake : ""} </h4>  */}

                    


                </div>
            </div>
        </div>

    )
}

export default Card;