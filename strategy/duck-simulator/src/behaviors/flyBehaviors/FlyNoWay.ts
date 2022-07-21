import FlyBehavior from "./FlyBehavior";

class FlyNoWay implements FlyBehavior {
	fly(): void {
		console.log("No flying allowed!");
	}
}

export default FlyNoWay;
