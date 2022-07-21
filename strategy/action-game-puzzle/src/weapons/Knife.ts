import Weapon from "./Weapon";

export default class Knife implements Weapon {
	name = "Knife";
	useWeapon(): void {
		console.log("Cutting with a knife");
	}
}
