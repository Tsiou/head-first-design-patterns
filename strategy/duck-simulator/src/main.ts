import FlyRocketPowered from "./behaviors/flyBehaviors/FlyRocketPowered";
import MallardDuck from "./ducks/MallardDuck";
import ModelDuck from "./ducks/ModelDuck";

const mallard = new MallardDuck();
mallard.performQuack();
mallard.performFly();

const model = new ModelDuck();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();
