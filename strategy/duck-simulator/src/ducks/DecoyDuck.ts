import FlyNoWay from "../behaviors/flyBehaviors/FlyNoWay";
import MuteQuack from "../behaviors/quackBehaviors/MuteQuack";
import Duck from "./Duck";

class DecoyDuck extends Duck {
	constructor() {
		super();
		this.flyBehavior = new FlyNoWay();
		this.quackBehavior = new MuteQuack();
	}

	display(): void {
		console.log("Decoy Duck");
	}
}

export default DecoyDuck;
