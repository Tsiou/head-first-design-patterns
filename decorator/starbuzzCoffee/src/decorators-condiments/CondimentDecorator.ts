import Beverage from "../beverages/Beverage";

export default abstract class CondimentDecorator extends Beverage {
	beverage: Beverage;

	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	abstract description: string;
}
