//create an array which contains city name and its temperature
 var cities = [
     {name:"Banglore, Karnataka",temperature:23,condition:"rainy 🌧️"},
     {name:"Chennai, Tamilnadu",temperature:30,condition:"sunny ☀️"},
     {name:"Kochi, Kerala",temperature:27,condition:"cloudy ☁️"},
     {name:"Hydrabad, Andrapradesh",temperature:35,condition:"sunny ☀️"},
     {name:"Kolkata, West Bengal",temperature:16,condition:"partly cloudy ⛅"},
     {name:"Mumbai, Maharastra",temperature:32,condition:"sunny ☀️"}
    ]

checkClimate = function(){
    //geting input and checking it with dataset
    var inputCity = document.getElementById("input").value;
    const filtered = cities.filter(function(v){
        if (v.name == inputCity)
        return true;
    })
    //printing output
    document.getElementById("cityname").innerHTML = filtered[0].name;
    document.getElementById("temperature").innerHTML = filtered[0].temperature;
    document.getElementById("condition").innerHTML = filtered[0].condition;
    //geting and printing day and date
    var day = new Date();
    var n = day.getDay();
    let week = ['sunday', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementById("date").innerHTML = week[n] + ", " + new Date().getHours() + ":" + new Date().getMinutes();
    //celsius to fahrenheit
    fahreh = function(){
        
        var fahrehn = filtered[0].temperature * (9/5) + 32;
        document.getElementById("temperature").innerHTML = fahrehn;
    }


}
