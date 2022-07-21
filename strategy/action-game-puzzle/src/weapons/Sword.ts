import Weapon from "./Weapon";

export default class Sword implements Weapon {
	name = "Sword";
	useWeapon(): void {
		console.log("Cutting with a sword");
	}
}
