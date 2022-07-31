import CondimentDecorator from "./CondimentDecorator";

export default class Soy extends CondimentDecorator {
	get description() {
		return `${this.beverage.description} , Soy`;
	}

	get cost() {
		return this.beverage.cost + 0.15;
	}
}
