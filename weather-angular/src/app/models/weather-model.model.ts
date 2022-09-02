export interface WeatherData {
    data:  Datum[];
    count: number;
}

export interface Datum {
    wind_cdir:      string;
    rh:             number;
    pod:            string;
    lon:            number;
    pres:           number;
    timezone:       string;
    ob_time:        string;
    country_code:   string;
    clouds:         number;
    ts:             number;
    solar_rad:      number;
    state_code:     string;
    city_name:      string;
    wind_spd:       number;
    slp:            number;
    wind_cdir_full: string;
    sunrise:        string;
    app_temp:       number;
    dni:            number;
    vis:            number;
    sources:        string[];
    h_angle:        number;
    dewpt:          number;
    snow:           null;
    aqi:            number;
    dhi:            number;
    wind_dir:       number;
    elev_angle:     number;
    ghi:            number;
    precip:         null;
    sunset:         string;
    lat:            number;
    uv:             number;
    datetime:       string;
    temp:           number;
    weather:        Weather;
    station:        string;
}

export interface Weather {
    icon:        string;
    code:        number;
    description: string;
}
