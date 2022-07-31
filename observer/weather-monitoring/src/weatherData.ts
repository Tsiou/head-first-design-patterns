import WeatherDataObserver from "interfaces/WeatherDataObserver";
import WeatherDataSubject from "interfaces/WeatherDataSubject";

export default class WeatherData implements WeatherDataSubject {
	observers: Array<WeatherDataObserver> = [];
    public pressure: number;
	public humidity: number;
	public temperature: number;

	constructor(temperature: number, humidity: number, pressure: number) {
		this.temperature = temperature;
		this.humidity = humidity;
		this.pressure = pressure;
	}

    public registerObserver (observer: WeatherDataObserver): void {
        this.observers.push(observer);
    };

    public removeObserver (observer: WeatherDataObserver) : void {
        this.observers.filter(o => o !== observer);
    };

    public notifyObservers () : void {
        this.observers.forEach(o => o.update());
    };

	/* This method gets called
	 * whenever the weather measurements
	 * have been updated
	 */
	public measurementsChanged(): void {
        this.notifyObservers();
    }

    public changeMeasurements(temperature: number, humidity: number, pressure: number){
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}
