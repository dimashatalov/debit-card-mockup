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
    card.draw();

    card.cardNumber.card.setValue("0000000000000000"); // It will seperate numbers automaticly
    card.cardExpiration.card.setValue("11/30);
    card.cardHolderName.card.setValue("Will Brown");

    card.setType("mastercard");   // it will add debit-card-mockup--maskter card class. It will remove all other modificators automaticly.
