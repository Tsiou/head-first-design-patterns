import Weapon from "./Weapon";

export default class BowAndArrow implements Weapon {
	name = "Bow and Arrow";
	useWeapon(): void {
		console.log("Shooting with a bow and arrow.");
	}
}
