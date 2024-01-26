import DefaultClass from "./default-class.js";
import Card from "./card.js";

export default class DebitCardMockup extends DefaultClass {


    constructor(node, settings) {
        super(node, settings);
    }

    draw() {

        this.card = new Card();

        this.node.innerHTML = "";
        this.node.appendChild(this.card.node);
    }
}