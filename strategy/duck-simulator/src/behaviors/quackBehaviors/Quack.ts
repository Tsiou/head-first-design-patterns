import QuackBehavior from "./QuackBehavior";

class Quack implements QuackBehavior {
	quack(): void {
		console.log("quack");
	}
}

export default Quack;
