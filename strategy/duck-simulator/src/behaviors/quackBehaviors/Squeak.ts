import QuackBehavior from "./QuackBehavior";

class Squeak implements QuackBehavior {
	quack(): void {
		console.log("squeak");
	}
}

export default Squeak;
