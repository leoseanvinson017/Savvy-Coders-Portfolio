var hello = "hello";
/* eslint-disable no-console */
var userName = prompt( "what's your name?" );
var checkUserName = function checkUserName(){
    if( !userName || userName === " " ){
        userName = prompt( "What's your name, for real this time" );
        checkUserName();
    }
};

checkUserName();

alert( hello + " " + userName );
