sentence = prompt("Que veux tu dire au bot?");


function isUpperCase(str)
{
    return str == str.toUpperCase() && str != str.toLowerCase();
}





if (sentence[sentence.length - 1] == "?"){
	console.log("Ouai Ouai....")
}

else if (isUpperCase(sentence)){
	console.log( "Pwa, calme-toi...")
}
else if(sentence.toLowerCase() == "fortnite"){
	console.log("on s' fait une partie soum-soum ?")
}

else if(sentence.replace(/\s/g,"") == ""){

	console.log("t'es en PLS ?")

}

else {
	console.log("balek.")
}
	















/*



Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;



*/