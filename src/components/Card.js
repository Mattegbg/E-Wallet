
function Card(props) {

    console.log(props)
    return (

        <div className="newcard">
            <h2 className="cardHolderNumber"> {props.card.cardNumber} </h2>
            <h4 className="cardHolder"> {props.card.cardName} </h4>
            <h5 className="cardValidThru"> {props.card.cardExpiry} </h5>
            <h4 className="cardValidDate"> {props.card.cardMake} </h4>
            
        </div>

    )
}

export default Card;