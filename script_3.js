number = prompt("Combien d'étages veux tu ?");




function buildPyramide(stairs) {

	for(let count = 0; count <=stairs; count++)
	{
  console.log(' '.repeat(stairs-count) + '#'.repeat(count));
    }


}



buildPyramide(number)







