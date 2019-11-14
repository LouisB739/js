

function arn(arn) {
	let result=""
  if (arn == "UCU" || arn == "UCC" || arn == "UCA" || arn == "UCG" || arn == "AGU" || arn == "AGC")
  	{result = "Sérine";}

  else if ( arn =="CCU" || arn =="CCC" || arn == "CCA" || arn =="CCG") 
  	{result = "Proline";}

  else if ( arn =="UUA" || arn =="UUG") 
  	{result = "Leucine";}

   else if ( arn =="UUU" || arn =="UUC") 
  	{result = "Phénylalanine";}


  else if ( arn =="CGU" || arn =="CGC" || arn == "CGA" || arn == "CGG" || arn == "AGA" || arn == "AGG" )
  	{result = "Arginine";}

   else if ( arn =="UAU" || arn =="UAC") 
  	{result = "Tyrosine";}

	return result
  ;
}



function finalArn(string)

{

let splitString = string.match(/.{1,3}/g)

let array2 = []


for(let index in splitString)

	  { array2.push(arn(splitString[index]))

	  }

	  console.log(array2.join("-")) 

}



example1 = "CCGUCGUUGCGCUACAGC"
example2 = "CCUCGCCGGUACUUCUCG"

finalArn(example2)



