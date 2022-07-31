import DisplayElement from "interfaces/DisplayElement";
import WeatherData from "weatherData";
import WeatherDataObserver from "interfaces/WeatherDataObserver";

export default class CurrentConditionsDisplay
	implements WeatherDataObserver, DisplayElement
{
	temperature: number;
	humidity: number;
	weatherData: WeatherData;

	constructor(weatherData: WeatherData) {
		this.weatherData = weatherData;
		weatherData.registerObserver(this);
		this.temperature = weatherData.temperature;
		this.humidity = weatherData.humidity;
		this.display();
	}

	public update(): void {
		this.temperature = this.weatherData.temperature;
		this.humidity = this.weatherData.humidity;
		this.display();
	}

	public display(): void {
		console.log(
			`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity.`
		);
	}
}
