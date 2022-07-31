import CurrentConditionsDisplay from "./displays/CurrentConditionsDisplay";
import StatisticsDisplay from "./displays/StatisticsDisplay";
import WeatherData from "./weatherData";

const weatherData = new WeatherData(80, 65, 30.4);

new CurrentConditionsDisplay(weatherData);
new StatisticsDisplay(weatherData);

weatherData.changeMeasurements(82, 70, 29.2);
weatherData.changeMeasurements(78, 90, 29.2);
