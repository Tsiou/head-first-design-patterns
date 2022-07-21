import NoWeapon from "../weapons/NoWeapon";
import Weapon from "../weapons/Weapon";

export default abstract class Character {
	constructor() {
		this.name = "Character";
		this.activeWeapon = new NoWeapon();
	}
	name: string;
	activeWeapon: Weapon;
	fight(): void {
		console.log(this.name + " is fighting with a " + this.activeWeapon.name);
	}

	changeWeapon(weapon: Weapon) {
		this.activeWeapon = weapon;
	}
}
