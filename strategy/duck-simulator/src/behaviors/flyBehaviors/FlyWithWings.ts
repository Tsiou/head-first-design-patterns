import FlyBehavior from "./FlyBehavior";

class FlyWithWings implements FlyBehavior {
	fly(): void {
		console.log("Flying with wings!");
	}
}

export default FlyWithWings;
