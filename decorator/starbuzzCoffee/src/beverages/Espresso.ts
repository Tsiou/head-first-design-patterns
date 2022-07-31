import Beverage from "./Beverage";

export default class Espresso extends Beverage {
    constructor() {
        super();
        this.description = 'Espresso';
    }

    public cost = 1.99;
}