'use strict'
let counter = 0 ;
function Q1(){
    let name = prompt("What is your name?");
    alert ("Hello "+ name);
    console.log(name);

    let q1 = prompt("Do you think my fav food is mansaf ? Answer by Yes / No / Y / N");
    q1 = q1.toLowerCase();
    console.log(q1);
    if (q1 === 'yes' || q1 === 'y' ){
    /*console.log("True, My fav food is mansaf")*/
    alert("True, My fav food is mansaf");
    counter++;
    }
    if (q1 === 'no' || q1 === 'n' ){
    alert("False, My fav food is mansaf");
    }   
}
Q1();

function Q2(){
    let q2 = prompt("Do you think my fav sport is basketball ? Answer by Yes / No / Y / N");
    q2 = q2.toLowerCase();
    console.log(q2);
    if (q2 === 'yes' || q2 === 'y' ){
        /*console.log("True, my fav sport is basketball")*/
        alert("True, my fav sport is basketball ");
        counter++;
        }
        if (q2 === 'no' || q2 === 'n' ){
        alert("False, my fav sport is basketball ");
        }   
}
Q2();

    
function   Q3(){
    let q3 = prompt("Do you think I play biano ? Answer by Yes / No / Y / N");
    q3 = q3.toLowerCase();
    console.log(q3);
    if (q3 === 'yes' || q3 === 'y' ){
        alert("Flase, I don't play biano ");
        }
        if (q3 === 'no' || q3 === 'n' ){
        /*console.log(True, I don't play biano");*/
        alert("True, I don't play biano");
        counter++;
        }    
}
Q3();

function Q4(){
    let q4 = prompt("Do you think I hate dogs ? Answer by Yes / No / Y / N");
    q4 = q4.toLowerCase();
    console.log(q4);
    if (q4 === 'yes' || q4 === 'y' ){
        alert("False,  I like dogs");
        }
        if (q4 === 'no' || q4 === 'n' ){
        /*console.log("True, I like dogs");*/
        alert("True, I like dogs");
        counter++;
        }
        
}
Q4();


function Q5(){
    let q5 = prompt("Do you think I like summer ? Answer by Yes / No / Y / N");
    q5 = q5.toLowerCase();
    console.log(q5);
    if (q5 === 'yes' || q5 === 'y' ){
        /*console.log("True, I like summer");*/
        alert("True, I like summer");
        counter++;
        }
        if (q5 === 'no' || q5 === 'n' ){
        alert("False, I like summer");
        }
        
}
Q5();


function Q6(){
    let q6 =prompt("Guess the number between 1 - 10 (You have just 4 chances)");
    /*console.log(the number is 4");*/
    let num = 4 ;

    for(let count = 0 ; count < 4; count++ ){

    if(q6 > num){

        alert("Too high ( Try Again )");
        q6 =prompt("Guess the number between 1 - 10 (You have 4 chances)");
    }

    
    else if(q6 < num){
        
        alert("Too low ( Try Again )");
        q6 =prompt("Guess the number between 1 - 10 (You have 4 chances)");
    }

    else if(q6 == num){
        
        alert("Your Answer is correct !")
        counter++;
        break;

    }
    }

    alert ("The Answer is 4 ");
    
 }   
Q6();


function Q7(){
    let q7 = prompt ("Guess three of my fav food between Mansaf / Salmon / Chicken wings / Steak / Grilled vegetables (You Have 6 chances)");
    
    if (q7 === 'Mansaf Salmon Steak' || q7 === 'Salmon Steak Mansaf' || q7 === 'Steak Salmon Mansaf'  
        || q7 === 'Mansaf Steak Salmon' || q7 === 'Salmon Mansaf Steak' || q7 === 'Steak Mansaf Salmon') 
        
        {
            /*console.log("Mansaf Steak Salmon");*/
            alert("The Answer is correct!");
            counter++;
        }

        else {

        for (let c = 0 ; c < 6 ; c++){
        alert ("The Answer is wrong (Try Again)");
        q7 = prompt ("Guess three of my fav food between Mansaf / Salmon / Chicken wings / Steak / Grilled vegetables (You Have 6 chances)");

        if (q7 === 'Mansaf Salmon Steak' || q7 === 'Salmon Steak Mansaf' || q7 === 'Steak Salmon Mansaf'  
        || q7 === 'Mansaf Steak Salmon' || q7 === 'Salmon Mansaf Steak' || q7 === 'Steak Mansaf Salmon' ){
            alert("The Answer is correct!");
            counter++;
            break;
        }
    
    }
        alert("The Answer is Mansaf and Salmon and Steak");

        }
        
        alert("The total of correct answers " + counter);    
 } 
 Q7();

 