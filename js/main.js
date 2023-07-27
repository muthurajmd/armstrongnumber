let a = parseInt(prompt('Enter the number '));
let x=a;
let y=a;
let z=0;
let sum=0;

document.write(`Given number ${a} <br>`)

 while (a>0)
    {
        let rem = a % 10;
		a= (a-rem)/10;
		z++

    }
	
	while (x>0)
    {
        let rem = x % 10;
		x= (x-rem)/10;
		sum=sum+(rem**z)

    }
	
	if(sum==y){
	
	       document.write(`${sum} is armstrong number`)	
	}
	
	else{
		 document.write(`${y} is not a armstrong number`)
	}
	