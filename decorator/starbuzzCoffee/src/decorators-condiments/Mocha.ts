import Beverage from "../beverages/Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Mocha extends CondimentDecorator {
	description: string;
	constructor(beverage: Beverage) {
		super(beverage);
		this.description = `${beverage.description} , Mocha`;
	}

	public cost = this.beverage.cost + 0.2;
}
