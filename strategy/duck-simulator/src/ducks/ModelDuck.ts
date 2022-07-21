import FlyNoWay from "../behaviors/flyBehaviors/FlyNoWay";
import Quack from "../behaviors/quackBehaviors/Quack";
import Duck from "./Duck";

export default class ModelDuck extends Duck {
	constructor() {
		super();
		this.flyBehavior = new FlyNoWay();
		this.quackBehavior = new Quack();
	}

	display(): void {
		console.log("I'm a model duck");
	}
}
