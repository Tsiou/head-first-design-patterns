import Weapon from "./Weapon";

export default class NoWeapon implements Weapon {
	name = "No weapon";
	useWeapon(): void {
		console.log("No weapon is equipped");
	}
}
