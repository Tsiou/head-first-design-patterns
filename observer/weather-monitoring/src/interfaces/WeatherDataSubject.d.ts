export default interface WeatherDataSubject {
	registerObserver: (observer: WeatherDataObserver) => void;
	removeObserver: (observer: WeatherDataObserver) => void;
	notifyObservers: () => void;
}
