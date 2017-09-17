function loadQuote() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
	    print(this.responseText);
       }
    };
    xhttp.open("GET", "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=html", true);
    xhttp.send();
}

function print(quote) {

    document.getElementById("quote").innerHTML = quote;
}


// This function can be used to parse json files
// Given an attribute and the full jason file as string in fullText
// the function returns the value of the given attribute
function retrieveText(attribute, fullText) {

    var n = fullText.search(text);
    var words = "";
    n += attribute.length;

    var count = 0;
    for(; n < fullText.length; n++)
    {
	if(fullText.charAt(n) == ":")
	{
	    for(; n < fullText.length; n++)
	    {
		if(fullText.charAt(n) == '"')
		{
		    count++;
		    n++;
		}
		if(count == 1)
		{
		    while(fullText.charAt(n) != '"')
		    {
			words += fullText.charAt(n);
			n++;
		    }
		    count++;
		    break;
		}
	    }
	    if(count == 2) break;
	}
    }
    return words;
}













