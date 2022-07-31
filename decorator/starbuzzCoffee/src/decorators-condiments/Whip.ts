import CondimentDecorator from "./CondimentDecorator";

export default class Whip extends CondimentDecorator {
	get description() {
		return `${this.beverage.description} , Whip`;
	}

	get cost() {
		return this.beverage.cost + 0.1;
	}
}
