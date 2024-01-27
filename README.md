# debit-card-mockup
It is javascript mockup of debit card, where you can fill in: 
- card number
- expire date
- cardholder name

## How to install
npm install debit-card-mockup

css and image take manually. Change CSS accordingly.


## Usage
    import DebutCardMockup from "debit-card-mocukp";

    let card = new DebitCardMockup(document.getElementById("mockup-container"));

    card.cardNumber.setValue("0000000000000000"); // It will seperate numbers automaticly
    card.cardExpiration.setValue("11/30);
    card.cardHolderName.setValue("Will Brown);

    card.addClassModoficator("mastercard");   // it will add debit-card-mockup--maskter card class. It will remove all other modificators automaticly.
