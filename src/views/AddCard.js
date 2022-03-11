import Top from '../components/Top';
import CardForm from '../components/CardForm';
import Card from '../components/Card';



function AddCard(props) {

    return (
        <section>
        <Top headline='AddCard'  />
        
        <CardForm setcards={props.setcards}/>
        </section>

    );
}



export default AddCard;