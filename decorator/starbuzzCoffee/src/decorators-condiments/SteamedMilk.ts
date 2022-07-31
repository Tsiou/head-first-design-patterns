import CondimentDecorator from "./CondimentDecorator";

export default class SteamedMilk extends CondimentDecorator {
    description = this.beverage.description + ' , Steamed Milk';
    public cost = this.beverage.cost + 0.10;   
}