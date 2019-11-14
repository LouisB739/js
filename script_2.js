
number = prompt("De quel nombre veux tu calculer la factorielle?");

function calcfact(num) {


	if (num == 1 || num == 0)
		return 1

	 let result = num


	 while (num > 1) { 
    num--; 
    result = result * num; }
     
  return result; 
 
}

console.log(`Le résultat est ${calcfact(number)}`);
