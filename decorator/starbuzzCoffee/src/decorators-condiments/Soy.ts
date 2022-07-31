import CondimentDecorator from "./CondimentDecorator";

export default class Soy extends CondimentDecorator {
	description = `${this.beverage.description} , Soy`;
	public cost = this.beverage.cost + 0.15;
}
