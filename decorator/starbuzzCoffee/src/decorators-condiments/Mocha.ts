import CondimentDecorator from "./CondimentDecorator";

export default class Mocha extends CondimentDecorator {
	get description(): string {
		return `${this.beverage.description} , Mocha`;
	}

	get cost(): number {
		return this.beverage.cost + 0.2;
	}
}
