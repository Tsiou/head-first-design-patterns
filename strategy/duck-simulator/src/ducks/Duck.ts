import FlyBehavior from "../behaviors/flyBehaviors/FlyBehavior";
import FlyNoWay from "../behaviors/flyBehaviors/FlyNoWay";
import MuteQuack from "../behaviors/quackBehaviors/MuteQuack";
import QuackBehavior from "../behaviors/quackBehaviors/QuackBehavior";

abstract class Duck {
	constructor() {
		this.flyBehavior = new FlyNoWay();
		this.quackBehavior = new MuteQuack();
	}
	flyBehavior: FlyBehavior;
	quackBehavior: QuackBehavior;
	performQuack() {
		this.quackBehavior.quack;
	}
	performFly() {
		this.flyBehavior.fly();
	}
	swim() {
		console.log("All ducks float, even decoys!");
	}

	setFlyBehavior(flyBehavior: FlyBehavior) {
		this.flyBehavior = flyBehavior;
	}

	setQuackBehavior(quackBehavior: QuackBehavior) {
		this.quackBehavior = quackBehavior;
	}

	abstract display(): void;
}

export default Duck;
