export default class DefaultClass {
    constructor(node, settings) {
        this.args = {};

        if (typeof node != "undefined") {
            this.node = node;
        }

        if (typeof settings != "undefined") {
            this.applySettings(settings);
        }
    }

    applySettings(settings) {
        for (let i in settings) {
            this.set(i, settings[i]);
        }
    }

    set(k, v) {
        this.args[k] = v;
    }


    get(k) {
        if (typeof this.args[k] == "undefined") {
            return false;
        }
        else {
            return this.args[k];
        }
    }
}

 