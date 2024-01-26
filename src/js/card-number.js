import DefaultClass from "./default-class.js";

export default class CardNumber extends DefaultClass {


    constructor() {
        super();

        this.makeTemplate();
        this.setValue("0000000000000000");
    }


    makeTemplate() {
        this.node = document.createElement("div");
        this.node.classList.add("debit-card-mockup__number");

        this.node.innerHTML = `
            <div class="debit-card-mockup__number__title">card number</div>
            <div class="debit-card-mockup__number__value"></div>
        `;

        this.set("valueNode", this.node.querySelector(".debit-card-mockup__number__value"));
    }


    setValue(originalString) {
        const splitString = originalString.match(/.{1,4}/g) || [];

        // Create a container element
        const container = document.createElement("div");
        
        let html = '';
        // Iterate over the split string and create a span for each group
        splitString.forEach(group => {

            html += `<span>` + group + `</span>`;
        });        

        this.get("valueNode").innerHTML = html;

    }
}