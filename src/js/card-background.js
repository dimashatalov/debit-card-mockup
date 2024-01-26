import DefaultClass from "./default-class.js";

export default class CardHolderName extends DefaultClass {


    constructor() {
        super();

        this.makeTemplate();
    }


    makeTemplate() {
        this.node = document.createElement("div");
        this.node.classList.add("debit-card-mockup__background");
    }
}