function printPlanet()
{
    var name_line = "<td>" + this.name + "</td>";
    var temperature_line = "<td>" + this.temperature + "</td>";
    var surface_line = "<td>" + this.surface + "</td>";
    var feature_line = "<td>" + this.feature + "</td>";
    var atmosphere_line = "<td>" + this.atmosphere + "</td>";


    var row = "<tr>" + name_line + temperature_line + surface_line + feature_line + atmosphere_line + "</tr>";
    document.write(row);
}

function Planet(name, temperature, surface, feature, atmosphere)
{
    this.temperature = temperature;
    this.name = name;
    this.surface = surface;
    this.feature = feature;
    this.atmosphere = atmosphere;


    this.printPlanet = printPlanet;
}


var Mercury = new Planet("Mercury", "167C", "Rocky Crust", "Cratered Plain", "Thin Air" );
var Venus = new Planet("Venus", "464C", "Volcanic Rock", "Toxic Clouds", "Dense Heat" );
var Earth = new Planet("Earth", "15C", "Liquid Water", "Life Forms", "Nitrogen Oxygen" );
var Mars = new Planet("Mars", "-65C", "Iron Dust", "Red Desert", "Carbon Dioxide" );
var Jupiter = new Planet("Jupiter", "-110C", "Gas Giant", "Great Spot", "Swirling Storms" );


Mercury.printPlanet();
Venus.printPlanet();
Earth.printPlanet();
Mars.printPlanet();
Jupiter.printPlanet();


//var empArray = [Mercury.name, Venus.name, Earth.name, Mars.name, Jupiter.name];

//empArray = empArray.sort();

//for( var counter = 0; counter < empArray.length; counter++)
{
    document.write(empArray[counter] + "<br>");
}
