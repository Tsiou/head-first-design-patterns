import QuackBehavior from "./QuackBehavior";

class MuteQuack implements QuackBehavior {
	quack(): void {
		console.log("");
	}
}

export default MuteQuack;