function getCheckedCheckboxesFor(checkboxName) {
    var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
    });
  console.log('in the function values is:',values);
    return values;
}

function getFootballData(valuesB) {
console.log('in the function');

	var redFlag  = "";
	var halfFlag = "";
	var fullFlag = "";

	for (var k=0;k < valuesB.length +1; k++) {
  		switch (valuesB[k]) {
    			case "99":
     				redFlag = "Y";
    			 	break;
    			case "199":
      				halfFlag = "Y";
      				break;
    			case "299":
      				fullFlag = "Y";
      				break;
    			default:
                        } // end switch
                    				}  /* end for k */

	var compa    = "";
	for (var j=0; valuesB[j] < 99; j++) {
	var html     = "";
	var titlea   = "",
	    summarya = "",
	    linka    = "";

		compa = valuesB[j];

		console.log('compa is set to:',compa);
 	 	$.getJSON('https://www.footballwebpages.co.uk/vidiprinter.json?comp='+compa   		,function(json) {

		// how many returned
		var len = json.vidiprinter.update.length;

		// now set up the HTML

		console.log('number returned len =  ',len);
		console.log('identify type =',json.vidiprinter.update[0].type);

     		html = '<div class="content row"><ul>';

		// loop through all the data
		// adding items to the list

  		for (var i=0; i < len; i++ ) {
    			if (json.vidiprinter.update[i].type === "GOAL" | json.vidiprinter.update[i].type === "GOALS" |
				(json.vidiprinter.update[i].type === "HALF-TIME") & (halfFlag === "Y") |
				(json.vidiprinter.update[i].type === "FULL-TIME") & (fullFlag === "Y") |
				(json.vidiprinter.update[i].type === "RED CARD") & (redFlag === "Y")) {
				titlea   = json.vidiprinter.update[i].event;
      				summarya = json.vidiprinter.update[i].time;
      				linka    = json.vidiprinter.update[i].type;

				html += '<li>' + linka + ' ' + titlea ;
				// html += '<p>' + summarya + '</p>';
				html += '</li>';
						}   // end if then
			// close the list
					  	}   // end for i
		html += '</ul></div>';

      console.log('compa is now: ',compa);
      console.log('html set to: ',html);

	switch (compa) {
    			case "1":
     				html = '<h4 style= "margin-right:140px"> Premier League</h4><br />' + html;
    			 	break;
    			case "2":
     				html = '<h4 style= "margin-right:120px"> Championship</h4><br />' + html;
      				break;
    			case "3":
     				html = '<h4 style= "margin-right:120px"> League 1</h4><br />' + html;
      				break;
    			case "4":
     				html = '<h4 style= "margin-right:120px"> League 2</h4><br />' + html;
      				break;
    			case "5":
     				html = '<h4 style= "margin-right:120px"> National League</h4><br />' + html;
      				break;
    			case "7":
     				html = '<h4 style= "margin-right:120px"> National League South</h4><br />' + html;
      				break;
    			case "21":
     				html = '<h4 style= "margin-right:120px"> FA Cup</h4><br />' + html;
      				break;
    			case "22":
     				html = '<h4 style= "margin-right:120px"> League Cup</h4><br />' + html;
      				break;
    			default:
                        } // end switch
$(".container-found").html(html);
						}); // end JSON call
    console.log('and finally compa is ; ',compa);
  						}   // end for j
}  //end of function
// enter will trigger a click event
$(document).ready(function() {
  $("#subBox").keyup(function(event)  {
    if(event.keyCode == 13) {
      $("#subBut").click();
    }
  });
console.log('here in the javascript');
// click event will extract the
//  data function
  $("#subBut").on('click', function(event){
    event.preventDefault();

var checkB = "competition";
var valuesB = getCheckedCheckboxesFor(checkB);
console.log('valuesB is ',valuesB);
getFootballData(valuesB);
  });
});
$("#quit").on('click', function (event) {

  window.close();


});
