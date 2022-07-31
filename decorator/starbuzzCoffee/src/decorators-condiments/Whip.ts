import CondimentDecorator from "./CondimentDecorator";

export default class Whip extends CondimentDecorator {
    description = `${this.beverage.description} , Whip`;
    public cost = this.beverage.cost + 0.10;
}