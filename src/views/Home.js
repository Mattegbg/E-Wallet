import Top from '../components/Top';
import CardStack from '../components/CardStack';


function Home(props) {
    return (
        <section>
        <Top headline='E-Wallet' />
        <CardStack cards={props.cards}/>
        </section>
        
    );
}

export default Home;