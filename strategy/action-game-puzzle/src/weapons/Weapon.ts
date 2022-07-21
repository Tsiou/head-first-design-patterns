import Character from "../characters/Character";

export default interface Weapon {
	name: string;
	useWeapon(enemy: Character): void;
}
