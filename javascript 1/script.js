
function validateForm()
{
	var personName = document.getElementById("idname").value;
    var personEmail = document.getElementById("idemail").value;
validateNameEmail();
    var personOrganizationName = document.getElementById("idorganizationname").value;
     var isValid = true;
	if(personName == "" ||  personEmail == ""  || personOrganizationName == "")
	{
	document.getElementById("error").innerHTML = "Please Fill all the required fields below";

	}	
	else
	{
		validateNameEmail();
		 alert("Form submitted successfully ");
		 clear();
		 document.getElementById("error").innerHTML = "";
		 
	}
		
	if(personOrganizationName == "")
	{
			warningMessage('idorganizationname1', 'Organization Name  is required');
			isValid = false;
	}
	else
	{
		warningMessage('idorganizationname1', '*');
			
	}

    	
	return isValid ;
	
	
}
function clear()
{
document.getElementById("name-form").reset();
}

function setPromotionCode()
{
		var select = document.getElementById('dropdown-text');
		var input = document.getElementById('promotion');
		input.value = select.value + '-PROMO';

		
}
function greetingMessage()
{
	if (document.getElementById('gender1') && document.getElementById('gender1').checked) {
		 alert("Hello Lady");
	}
	else if(document.getElementById('gender') && document.getElementById('gender').checked) {
		 alert("Hello Sir");
	}
}
function emailChecking(value)
{
	var personEmail = document.getElementById("idemail").value;
		var reg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		 if (reg.test(personEmail))
			 {
					
						warningMessage('idemail1', '*');	
             }
			 else
			 {
				 warningMessage('idemail1', 'Invalid Email');
				
			 }
			 
}
function warningMessage( idName,messageType)
{
	document.getElementById(idName).innerHTML = messageType;
}

function validateNameEmail()
{
	var personName = document.getElementById("idname").value;
	var personEmail = document.getElementById("idemail").value;

	var isValid = true;



		if( personName == "")
		{
			warningMessage('idname1', 'Name is required');
			isValid = false;
		}
		else{
			warningMessage('idname1', '*');
		}
		
		if( personEmail == "")
		{
		warningMessage('idemail1', 'Email is required');
		isValid = false;
		}
		else{
			
				warningMessage('idemail1', '*');
		}
		}
function emailVerification()
{
	  var personEmail = document.getElementById("idemail").value;
	emailChecking(personEmail);
}
function urlValidation()
{
	url = document.getElementById("url").value;
var re = /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;
if (!re.test(url)) { 
warningMessage('url-message', 'Url error');
 
return false;
}
else{
warningMessage('url-message', ' ');
} 
}