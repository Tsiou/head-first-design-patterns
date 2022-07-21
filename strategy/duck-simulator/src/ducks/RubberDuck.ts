import FlyNoWay from "../behaviors/flyBehaviors/FlyNoWay";
import MuteQuack from "../behaviors/quackBehaviors/MuteQuack";
import Duck from "./Duck";

class RubberDuck extends Duck {
	constructor() {
		super();
		this.quackBehavior = new MuteQuack();
		this.flyBehavior = new FlyNoWay();
	}

	display(): void {
		console.log("Rubber duck");
	}
}

export default RubberDuck;
