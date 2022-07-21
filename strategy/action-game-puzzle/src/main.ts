import Knight from "./characters/Knight";
import Queen from "./characters/Queen";
import BowAndArrow from "./weapons/BowAndArrow";
import Sword from "./weapons/Sword";

const knight = new Knight();

const sword = new Sword();
knight.changeWeapon(sword);
knight.fight();

const bowAndArrow = new BowAndArrow();
knight.changeWeapon(bowAndArrow);
knight.fight();

const queen = new Queen();
queen.changeWeapon(bowAndArrow);
queen.fight();