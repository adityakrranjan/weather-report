const apiKey = "88aa92bac4cfe2944b04ee45e7420a65";

const button = document.getElementById("weatherBtn");
const result = document.getElementById("weatherResult");

button.addEventListener("click", function () {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                result.innerHTML = "City not found ❌";
            } else {
                result.innerHTML = `
                    <h3>${data.name}</h3>
                    <p>🌡 Temperature: ${data.main.temp} °C</p>
                    <p>💧 Humidity: ${data.main.humidity}%</p>
                    <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
                `;
            }
        })
        .catch(error => {
            result.innerHTML = "Error fetching data";
            console.log(error);
        });
});
