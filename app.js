//create an array which contains city name and its temperature
 var cities = [
     {name:"Banglore, Karnataka",temperature:23,condition:"rainy"},
     {name:"Chennai",temperature:30,condition:"sunny"},
     {name:"Kochi, Kerala",temperature:27,condition:"cloudy"}
    ]

checkClimate = function(){
    var inputCity = document.getElementById("input").value;
    const filtered = cities.filter(function(v){
        if (v.name == inputCity)
        return true;
    })
    document.getElementById("cityname").innerHTML = filtered[0].name;
    document.getElementById("temperature").innerHTML = filtered[0].temperature;
    document.getElementById("condition").innerHTML = filtered[0].condition;
    var day = new Date();
    var n = day.getDay();
    let week = ['sunday', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementById("date").innerHTML = week[n] + ", " + new Date().getHours() + ":" + new Date().getMinutes();
}
