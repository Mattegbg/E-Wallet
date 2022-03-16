import Top from '../components/Top';
import CardStack from '../components/CardStack';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Home(props) {
    let cardsWithoutSelected = props.cards.filter(card => card.cardNumber!==props.selected.cardNumber  )  //cardsWithoutSelected går igenom alla kort och tar bort selected från stacken
    return (
        <section>
            <Top headline='E-Wallet' />
            <Card card={props.selected} removeCard={props.removeCard} selected={props.selected} /> 
            <CardStack cards={cardsWithoutSelected} selectCard={props.selectCard}  />
            <Link to="/addcard">Add a new card</Link>

        </section>

    );
}



export default Home;