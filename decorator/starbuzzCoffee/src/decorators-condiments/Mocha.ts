import { SIZES } from "beverages/Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Mocha extends CondimentDecorator {
	get description(): string {
		return `${this.beverage.description} , Mocha`;
	}

	get cost(): number {
		const beverageSize = this.beverage.size;
		switch (beverageSize) {
			case SIZES.TALL:
				return this.beverage.cost + 0.15;
			case SIZES.GRANDE:
				return this.beverage.cost + 0.2;
			case SIZES.VENTI:
				return this.beverage.cost + 0.25;
		}
	}
}
