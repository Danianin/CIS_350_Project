$('.btn').click(function() 
{
  
	$('.content').text('loading . . .');
	//var url = ;
	var pokeElem = document.getElementById("pokemon");
	var filter = "";
	var pokemon = "";
	if (pokeElem != null)
	{
		filter = pokeElem.value;
		pokemon = filter.toLowerCase();
	}
	
	var settings =
	{
		"async": true,
		"crossDomain": true,
		"url": "https://pokeapi.co/api/v2/pokemon/" + pokemon + "/",		
		"method": "GET",
		"headers": 
		{
			"x-rapidapi-host": "Pokestefan-skliarovV1.p.rapidapi.com",
			"x-rapidapi-key": "228b8aa005msh73cd69f56644ef3p16ca87jsn21efaf02ee07"
		}
	};
  
	$.ajax(settings).done(function (response) 
	{
		{
		console.log(response);
		$('.content').text(JSON.stringify(response));
		
		var htmlString = "<h2># " + response.id + "   ";
		htmlString += response.name.toUpperCase() + "</h2><br>";
		htmlString += "<h3>Type: " + response.types[0].type.name.toUpperCase() + " " ;
			if (response.types[1] != null)
			{
				htmlString += "Type: " + response.types[1].type.name.toUpperCase(); 
			}
		htmlString += "</h3><br />"
		htmlString += "HP: " + response.stats[5].base_stat + "<br>";
		htmlString += "Attack: " + response.stats[4].base_stat + "<br>";
		htmlString += "Defense: " + response.stats[3].base_stat + "<br>";
		htmlString += "Speical Attack: " + response.stats[2].base_stat + "<br>";
		htmlString += "Special Defense: " + response.stats[1].base_stat + "<br>";
		htmlString += "Speed: " + response.stats[0].base_stat;
		
		$('.content').html(htmlString);		
		}
	});  
});



