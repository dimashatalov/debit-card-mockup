import DefaultClass from "./default-class.js";

export default class CardHolderName extends DefaultClass {


    constructor() {
        super();

        this.makeTemplate();
    }


    makeTemplate() {
        this.node = document.createElement("div");
        this.node.classList.add("debit-card-mockup__name");

        this.node.innerHTML = `
            <div class="debit-card-mockup__name__title">cardholder name</div>
            <div class="debit-card-mockup__name__value"></div>
        `;

        this.set("valueNode", this.node.querySelector(".debit-card-mockup__name__value"));
    }
 

    setValue(originalString) {
       
        this.get("valueNode").innerHTML = originalString;

    }    
} 