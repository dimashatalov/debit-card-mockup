import DefaultClass from "./default-class.js";

export default class CardExpiration extends DefaultClass {


    constructor() {
        super();

        this.makeTemplate();
    }


    makeTemplate() {
        this.node = document.createElement("div");
        this.node.classList.add("debit-card-mockup__expiration");

        this.node.innerHTML = `
            <div class="debit-card-mockup__expiration__title">expires</div>
            <div class="debit-card-mockup__expiration__value"></div>
        `;

        this.set("valueNode", this.node.querySelector(".debit-card-mockup__expiration__value"));
    }


    setValue(originalString) {
       
        this.get("valueNode").innerHTML = originalString;

    }      
}