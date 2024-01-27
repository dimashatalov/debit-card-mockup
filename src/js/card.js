import DefaultClass from "./default-class.js";
import CardNumber from "./card-number.js";
import CardExpiration from "./card-expiration.js";
import CardHolderName from "./card-holder-name.js";

import CardBackGround from "./card-background.js";


export default class Card extends DefaultClass {


    constructor() {
        super();

        this.makeTemplate();
 
    }
 
    makeTemplate() {
        this.node = document.createElement("div");
        this.node.classList.add("debit-card-mockup");
        this.node.classList.add("debit-card-mockup--mastercard");

        this.cardNumber = new CardNumber();
        this.node.appendChild(this.cardNumber.node);

        this.cardExpiration = new CardExpiration();
        this.node.appendChild(this.cardExpiration.node);
        
        this.cardHolderName = new CardHolderName();
        this.node.appendChild(this.cardHolderName.node);     
            
    }

    addClassModificator(mod) {
        this.node.classList.add("debit-card-mockup--" + mod);
    }

    removeClassMofificators() {
        const classNames = this.node.classList;

        // Iterate over the class names and remove those containing '--'
        for (const className of classNames) {
            if (className.includes('--')) {
                this.node.classList.remove(className);
            }
        }
    }

}