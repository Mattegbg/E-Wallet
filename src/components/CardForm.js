

function CardForm(props) {

    /* skickar från addCard knappen till home/cardstack */
    console.log(props)
    function addCard() { 
        console.log("hej")
        props.setcards({
                 cardNumber: "1234 4566 4433 2222",
                cardName: "kalle kula",
                 cardExpiry: "12/30",
                 cardCvv: "123",
                 cardMake: "Bitcoin Inc",
               })

    }

    return (
        <div>
            <div className="cardnumber">
                <label> Card number </label>
                <input type="number" name="cardnumber" placeholder="cardnumber" />

            </div>


            <div className="cardname">
                <label> Card holder name </label>
                <input type="text" name="cardname" placeholder="Firstname & Lastname" />

            </div>

            <div className="validCcvName">
                <label> Valid thru</label>
                <label>Ccv</label>
            </div>

            <div className="validCcvInput">
                <input type="text" name="validthru" placeholder="Valid Thru" />
                <input type="text" name="ccv" placeholder="Ccv" />

            </div>
            <div className="vendor">
                <label> Vendor </label>
                <select name="vendor" className="vendor">
                    <option value="" >Choose Bank</option>
                    <option value="bitcoin">Bitcoin Inc</option>
                    <option value="ninja">Ninja Bank</option>
                    <option value="blockchain">Block Chain Inc</option>
                    <option value="evil">Evil Corp</option>

                </select>

            </div>


            <button onClick={addCard} >ADD CARD</button>
        </div>

    )
}

export default CardForm;