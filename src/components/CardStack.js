import Card from './Card';

function CardStack(props) {
    /* separerar ut varje kort från cards */
    const cardstack = props.cards.map((card, index) => {
        return (
            <Card key={index} card={card} selectCard={props.selectCard}/>
        )
    })

    return(
        <div>
        {cardstack}
        </div>

    )
}

export default CardStack;