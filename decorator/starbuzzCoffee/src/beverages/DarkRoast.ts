import Beverage from "./Beverage";

export default class DarkRoast extends Beverage {
	get description(): string {
		return "Dark Roast Coffee";
	}

	get cost() : number {
		return 0.99;
	}
}
