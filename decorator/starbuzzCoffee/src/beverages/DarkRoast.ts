import Beverage from "./Beverage";

export default class DarkRoast extends Beverage {
	constructor() {
        super();
		this.description = "Dark Roast Coffee";
	}

	public cost = 0.99;
}
