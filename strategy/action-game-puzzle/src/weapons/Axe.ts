import Weapon from "./Weapon";

export default class Axe implements Weapon{
    name = 'Axe';
    useWeapon(): void {
        console.log('cutting with an axe!');
    }
}