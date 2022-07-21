import FlyWithWings from "../behaviors/flyBehaviors/FlyWithWings";
import Quack from "../behaviors/quackBehaviors/Quack";
import Duck from "./Duck";

class RedheadDuck extends Duck {
	constructor() {
		super();
		this.quackBehavior = new Quack();
		this.flyBehavior = new FlyWithWings();
	}

	display(): void {
		console.log("Redhead Duck");
	}
}

export default RedheadDuck;
