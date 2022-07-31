import CondimentDecorator from "./CondimentDecorator";

export default class SteamedMilk extends CondimentDecorator {
	get description() {
		return this.beverage.description + " , Steamed Milk";
	}

	get cost() {
		return this.beverage.cost + 0.1;
	}
}
