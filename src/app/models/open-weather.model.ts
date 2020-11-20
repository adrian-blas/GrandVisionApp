export interface OpenWeather {
    cod: number;
    calctime: number;
    cnt: number;
    list: List[];
}

export interface List {
    id: number;
    dt: number;
    name: string;
    coord: Coord;
    main: MainClass;
    visibility: number;
    wind: Wind;
    rain: Rain | null;
    snow: null;
    clouds: Clouds;
    weather: Weather[];
}

export interface Clouds {
    today: number;
}

export interface Coord {
    Lon: number;
    Lat: number;
}

export interface MainClass {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
}

export interface Rain {
    '1h': number;
}

export interface Weather {
    id: number;
    main: MainEnum;
    description: Description;
    icon: Icon;
}

export enum Description {
    ClearSky = 'clear sky',
    LightRain = 'light rain',
    ScatteredClouds = 'scattered clouds',
}

export enum Icon {
    The01N = '01n',
    The03N = '03n',
    The10N = '10n',
}

export enum MainEnum {
    Clear = 'Clear',
    Clouds = 'Clouds',
    Rain = 'Rain',
}

export interface Wind {
    speed: number;
    deg: number;
}
