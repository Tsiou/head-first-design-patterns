import DarkRoast from "./beverages/DarkRoast";
import Espresso from "./beverages/Espresso";
import HouseBlend from "./beverages/HouseBlend";
import Mocha from "./decorators-condiments/Mocha";
import Soy from "./decorators-condiments/Soy";
import Whip from "./decorators-condiments/Whip";

const beverage = new Espresso();

console.log(`${beverage.description} costs ${beverage.cost}`);

let anotherBeverage = new DarkRoast();
anotherBeverage = new Mocha(anotherBeverage);
anotherBeverage = new Mocha(anotherBeverage);
anotherBeverage = new Whip(anotherBeverage);

console.log(`${anotherBeverage.description} costs ${anotherBeverage.cost}`);

let yetAnotherBeverage = new HouseBlend();
yetAnotherBeverage = new Soy(yetAnotherBeverage);
yetAnotherBeverage = new Mocha(yetAnotherBeverage);
yetAnotherBeverage = new Whip(yetAnotherBeverage);

console.log(
	`${yetAnotherBeverage.description} costs ${yetAnotherBeverage.cost}`
);
