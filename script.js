let API_KEY = "YOUR API_KEY";

const getWeatherdata = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
    return fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`City not found: ${city}`);
            }
            return response.json();
        });
};

function searchcity() {
    const city = document.getElementById("cityname").value;

    getWeatherdata(city)
        .then((data) => {
            showweatherdata(data);
        })
        .catch((err) => {
            console.log("Error:", err.message);
        });
}

const showweatherdata = (weatherdata) => {
    document.getElementById('city').innerText = weatherdata.name;
    document.getElementById('humidity').innerText = weatherdata.weather[0].main;
    document.getElementById('temp').innerText = weatherdata.main.temp + " °F";
    document.getElementById('wind').innerText = weatherdata.wind.speed + " mph";
};
