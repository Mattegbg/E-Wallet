
import { useNavigate } from "react-router-dom";


function CardForm(props) {

    const navigate = useNavigate()

    const { addCard, setTemplate } = props

    /* skickar från addCard knappen till home/cardstack */
    
    function addingCard() {
        
        addCard({
            cardNumber: document.getElementById("cardnumber").value,
            cardName: document.getElementById("cardname").value,
            cardExpiry: document.getElementById("validthru").value,
            cardCvv: document.getElementById("ccv").value,
            cardMake: document.getElementById("vendor").value,
        })
        //endpoint för texten ovan / lägger till kort för home.
        navigate("/")

    }

    //skickar in alla inputs till addcard kortet så text ändras i realtid. 
    function updateAddCard(){ //Läggs in i alla inputs nedan. 
        const card={
            cardNumber: document.getElementById("cardnumber").value,
            cardName: document.getElementById("cardname").value,
            cardExpiry: document.getElementById("validthru").value,
            cardCvv: document.getElementById("ccv").value,
            cardMake: document.getElementById("vendor").value,
        }

        setTemplate(card); //ovan skickas in till AddCard.js för att "spotta ut" de vi vill se.  

    }

    return (
        <div>

            <div className="cardnumber">
                <label> Card number </label>
                <input onChange={updateAddCard} id="cardnumber" type="text" name="cardnumber" placeholder="cardnumber" maxLength="16"  />

            </div>


            <div className="cardname">
                <label> Card holder name </label>
                <input onChange={updateAddCard} id="cardname" type="text" name="cardname" placeholder="Firstname & Lastname" maxLength="30" />

            </div>

            <div className="validCcvName">
                <label> Valid thru</label>
                <label>Ccv</label>
            </div>

            <div className="validCcvInput">
                <input onChange={updateAddCard} id="validthru" type="text" name="validthru" placeholder="Valid Thru" maxLength="5" />
                <input onChange={updateAddCard} id="ccv" type="text" name="ccv" placeholder="Ccv" maxLength="3" />

            </div>
            <div className="vendor1">
                <label> Vendor </label>
                <select onChange={updateAddCard} name="vendor" id="vendor">
                    <option value="" >Choose Bank</option>
                    <option value="Bitcoin">Bitcoin Inc</option>
                    <option value="Ninja">Ninja Bank</option>
                    <option value="Blockchain">Block Chain Inc</option>
                    <option value="Evil">Evil Corp</option>

                </select>

            </div>


            <button onClick={addingCard} >ADD CARD</button>
        </div>

    )
}

export default CardForm;