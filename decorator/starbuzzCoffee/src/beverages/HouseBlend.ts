import Beverage from "./Beverage";

export default class HouseBlend extends Beverage {
	get description(): string {
		return "House Blend Coffee";
	}

	get cost() {
		return 0.89;
	}
}
