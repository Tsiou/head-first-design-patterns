import DisplayElement from "interfaces/DisplayElement";
import WeatherDataObserver from "interfaces/WeatherDataObserver";
import WeatherData from "weatherData";

export default class StatisticsDisplay
	implements WeatherDataObserver, DisplayElement
{
	temperatures: Array<number> = [];
	weatherData: WeatherData;
	averageTemp: number = 0;
	minimumTemp: number = 0;
	maximumTemp: number = 0;

	constructor(weatherData: WeatherData) {
		this.weatherData = weatherData;
		weatherData.registerObserver(this);
		this.temperatures = [this.weatherData.temperature];
		this.updateStatistics();
		this.display();
	}

	public display(): void {
		console.log(`Weather Stats
                    Avg temp: ${this.averageTemp} degress, minimum temp: ${this.minimumTemp}, maximum temp: ${this.maximumTemp}.`);
	}
	public update(): void {
		const newTemperature = this.weatherData.temperature;
		this.temperatures.push(newTemperature);
		this.updateStatistics();
		this.display();
	}

	private updateStatistics() {
		this.averageTemp =
			this.temperatures.reduce((acc, cur) => acc + cur, 0) /
			this.temperatures.length;
		const sortedTemps = this.temperatures.slice().sort();
		this.minimumTemp = sortedTemps.length > 0 ? sortedTemps[0] : 0;
		this.maximumTemp =
			sortedTemps.length > 0 ? sortedTemps[sortedTemps.length - 1] : 0;
	}
}
