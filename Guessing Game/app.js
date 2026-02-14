const max=prompt("enter the maxmium number");
//console.log(max);
const random=Math.floor(Math.random()*max)+1;
//console.log(random);
let guess=prompt("Guess the Number");
while(true){
    if(guess=="quit"){
        console.log("user Quit");
        break;
    }
    if(guess==random){
        console.log("u are right .The Number is:",random);
        break;
    }
    else if(guess>random){
        prompt("your guess is higher.Please try again ")}
        else if(guess<random){
            prompt("yout guess is too small.Please try agin")}

}