import Top from '../components/Top';
import CardForm from '../components/CardForm';
import Card from '../components/Card';
import { useState } from 'react';



function AddCard(props) {

    const{addCard}=props
    const [template, setTemplate] = useState({}) //ta info från cardform, skicka in till card för att ändra text på default kortet

    return (
        <section>
        <Top headline='AddCard'  />
        <Card card={template} /> 
        <CardForm addCard={addCard} setTemplate={setTemplate}/>
        </section>

    );
}



export default AddCard;