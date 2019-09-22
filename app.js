window.addEventListener("load", () => {
    let long;
    let lat;
    let temperaturedescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('location-timezone');

    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition
        (position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/270036ae9a3eaa417f5e47cadcc41c40/${lat},${long}`;
            
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data); //Test
                const {temperature, summary} = data.currently;
                //Set DOM elements from the API
                temperatureDegree.textContent = temperature;
                temperaturedescription.textContent = summary;
                locationTimezone.textContent = data.locationTimezone;
            })
        });
        
       
    }
});