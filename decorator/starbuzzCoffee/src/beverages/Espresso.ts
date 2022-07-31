import Beverage from "./Beverage";

export default class Espresso extends Beverage {
	get description(): string {
		return "Espresso";
	}

	get cost(): number {
		return 1.99;
	}
}
