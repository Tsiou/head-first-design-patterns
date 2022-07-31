import { SIZES } from "beverages/Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Soy extends CondimentDecorator {
	get description() {
		return `${this.beverage.description} , Soy`;
	}

	get cost(): number {
		const beverageSize = this.beverage.size;
		switch (beverageSize) {
			case SIZES.TALL:
				return this.beverage.cost + 0.1;
			case SIZES.GRANDE:
				return this.beverage.cost + 0.15;
			case SIZES.VENTI:
				return this.beverage.cost + 0.2;
		}
	}
}
