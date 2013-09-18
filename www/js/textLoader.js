/*

  CECI EST UN CODE TRES SALE

  Ceci est fait à l'arrache

*/

function prevAndNext(curPar)
{
    var numPara = curPar['num'];

    var daNext = parseInt(numPara) +1;
    var daPrev = parseInt(numPara) -1;
    
    if (curPar['num'] == 1 || curPar['num'] == 1000)
    {
	$('#previusPar').hide();
    }
    else if (curPar['num'] == 221)
    {
	$('#nextPar').hide();
    }
    else
    {
	$('#previusPar').show();
	$('#nextPar').show();
    }

     if(curPar['num'] >= 1000) // On est dans un chapitre
    {
	if (curPar['num'] == 1000)
	{
	    $('#nextPar').attr("onclick", "loadParagraphe(1)");
	}
	else if (curPar['num'] == 2000)
	{
	    $('#previusPar').attr("onclick", "loadParagraphe(34)");
	    $('#nextPar').attr("onclick", "loadParagraphe(35)");
	}
	else if (curPar['num'] == 3000)
	{
	    $('#previusPar').attr("onclick", "loadParagraphe(53)");
	    $('#nextPar').attr("onclick", "loadParagraphe(54)");
	}
	else if (curPar['num'] == 4000)
	{
	    $('#previusPar').attr("onclick", "loadParagraphe(72)");
	    $('#nextPar').attr("onclick", "loadParagraphe(73)");
	}
	else if (curPar['num'] == 5000)
	{
	    $('#previusPar').attr("onclick", "loadParagraphe(74)");
	    $('#nextPar').attr("onclick", "loadParagraphe(75)");
	}
	else if (curPar['num'] == 6000)
	{
	    $('#previusPar').attr("onclick", "loadParagraphe(146)");
	    $('#nextPar').attr("onclick", "loadParagraphe(147)");
	}
	else if (curPar['num'] == 7000)
	{
	    $('#previusPar').attr("onclick", "loadParagraphe(164)");
	    $('#nextPar').attr("onclick", "loadParagraphe(164)");
	}
	else if (curPar['num'] == 8000)
	{
	    $('#previusPar').attr("onclick", "loadParagraphe(179)");
	    $('#nextPar').attr("onclick", "loadParagraphe(180)");
	}
	else if (curPar['num'] == 9000)
	{
	    $('#previusPar').attr("onclick", "loadParagraphe(211)");
	    $('#nextPar').attr("onclick", "loadParagraphe(212)");
	}
	
    }
    else // on est dans un chapitre
    {

	$('#previusPar').attr("onclick", "loadParagraphe("+ daPrev +")");
	$('#nextPar').attr("onclick", "loadParagraphe("+ daNext +")");
    }
}


function loadParagraphe(numParagraphe)
{    
    $.getJSON('laSocDuSpect.json')
	.done( function (json) 
	       {
		    for (var i in json)
		    {
			var actualPar = json[i];
			//console.log("Num Para : "+ numParagraphe);

			if (actualPar['num'] == numParagraphe && actualPar['type']  == "paragraphe" )
			{			    
			    $('#numOfPara').html(" #"  +  actualPar['num'] + " (Paragraphe : "+ actualPar['chap']+")");			   
			    $('#daText').html(actualPar['paragraphe']);
		   
			    prevAndNext(actualPar);
			}
			// else
			// {
			//     console.log("debug");
			// }
		    }


	       }
	     )
	.fail ( function (jqxhr, textStatus, error)
		{
		    var err = textStatus + ", " + error;
		    console.log( "Erreur la : " + err);i
		}
	      ) ;
 

}


function loadChap(numChap)
{
    // $.getJSON('final.json', function(data) {
    // 	var items = [];
    // 	$.each(data, function(key, val) {
    // 	    items.push('<li id="' + key + '">' + val + '</li>');
    // 	});
    // 	$('<ul/>', {
    // 	    'class': 'my-new-list',
    // 	    html: items.join('')
    // 	}).appendTo('body');
    // });


    if (numChap > 0 && numChap < 10)
    {
	$.getJSON('laSocDuSpect.json')
	    .done(
		function (json) 
		{
		    for ( i in json)
		    {
			//console.log(json[i]['num']);
			var actualChap = json[i];

			if (actualChap['chap'] == numChap && actualChap['type']  == "chapitre" )
			{
			    $('#numOfPara').html( actualChap['titre']);
			    $('#daText').html( actualChap['paragraphe'] );
			    prevAndNext(actualChap);
			}
		    }		    	 
		}
	    )
	    .fail(
		function (jqxhr, textStatus, error)
		{
		    var err = textStatus + ", " + error;
		    console.log( "Erreur là :: " + err);
		}
	    ) ;
    }
    else
    {
	alert("Numéro de chapitre invalide");
    }

};

function loadAbout()
{
    $('#numOfPara').html("Absurd Developpement");
    $('#daText').html( "Developpé par Absurd Developpement <br />  Dans le but de tester <a href=\"http://jquerymobile.com/\">JQuery Mobile</a> , <a href=\"http://phonegap.com/\">PhoneGap</a> et vous faire découvrire <a href=\"http://fr.wikipedia.org/wiki/Guy_Debord\">Guy Debord</a>." );
}

