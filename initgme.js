// JavaScript Document

//garbage initgame stuff
// JavaScript Document
// JavaScript Document
$(document).ready(function(){
	
	console.log(2+2);
	$("btn-new").hide();
	$("btn-stand").hide();
	
});	
	function displayStatusMessage(msg){
		$("#status").html(msg);
	}
	function initgame(){              //error message stuff
		var initErrors = [];
		var errorMessage = '';
	
		if (!Modernizr.localstorage){	
			
			initErrors.push('Local storage not available');
		}
		
		if (typeof Mustache !== undefined){
			
			initErrors.push('Mustache not available');
		}
		
		if(!initErrors.length){
		};
		else{
			initErrors.push('Houston, we have a problem! (Local storage not available, Mustache not loaded)');
		}
		if (Modernizr.localstorage && typeof Mustache === undefined){
			
			initErrors.push('Houston, we have a problem (Mustache not loaded));
			displayStatusMessage();
			return false;
		}
	
		function("btn-new")
	
		
	