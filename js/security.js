// JavaScript Document
var security = function(){
	var user = getCookiename( "username" ),
	pwd = getCookiepwd( "pass" ),
	usernameone = getCookienameone( "usernameone" ),
	pwdone = getCookiepwdone( "passone" );
	if ( user == "user" && pwd == "pwd" ) {} else if( usernameone=="dsppa" && pwdone=="dsppa" ){}else {
		parent.jumpmain();
	}
}
security();
function getCookiename( cname ) {
	var name = cname + "=";
	var ca = document.cookie.split( ';' );
	for ( var i = 0; i < ca.length; i++ ) {
		var c = ca[ i ].trim();
		if ( c.indexOf( name ) == 0 ) return c.substring( name.length, c.length );
	}
	return "";
}

function getCookiepwd( cpass ) {
	var pass = cpass + "=";
	var ca = document.cookie.split( ';' );
	for ( var i = 0; i < ca.length; i++ ) {
		var c = ca[ i ].trim();
		if ( c.indexOf( pass ) == 0 ) return c.substring( pass.length, c.length );
	}
	return "";
}

function getCookienameone( cnameone ) {
	var nameone = cnameone + "=";
	var ca = document.cookie.split( ';' );
	for ( var i = 0; i < ca.length; i++ ) {
		var c = ca[ i ].trim();
		if ( c.indexOf( nameone ) == 0 ) return c.substring( nameone.length, c.length );
	}
	return "";
}

function getCookiepwdone( cpassone ) {
	var passone = cpassone + "=";
	var ca = document.cookie.split( ';' );
	for ( var i = 0; i < ca.length; i++ ) {
		var c = ca[ i ].trim();
		if ( c.indexOf( passone ) == 0 ) return c.substring( passone.length, c.length );
	}
	return "";
}

function setCookie( cname, cvaluename, cpass, cvaluepass,cnameone, cvaluenameone, cpassone, cvaluepassone ) {
	document.cookie = cname + "=" + cvaluename;
	document.cookie = cpass + "=" + cvaluepass;
	document.cookie = cnameone + "=" + cvaluenameone;
	document.cookie = cpassone + "=" + cvaluepassone;
}