import Beverage from "./Beverage";

export default class Decaf extends Beverage {
	get description(): string {
		return "Decaf Coffee";
	}

	get cost(): number {
		return 1.05;
	}
}
