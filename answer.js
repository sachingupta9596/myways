// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler



function fizzbuzz(number){
    var str = "";
    var sum =0;
    if(!number){
        return;
    }
    else{
        
    }
    
    for(let c of number){
        sum+=parseInt(c);
    }
 
    
    for(let i = 1 ; i<sum;i++){
         if(i%4==0&&i%5==0){
           
            str+="FizzBuzz";
             str+=" ";
            
        }
        else if(i%4==0){
           
             str+="Fizz";
             str+=" ";
        }
        else if(i%5==0){
           
             str+="Buzz";
             str+=" ";
        }
        else{
           
             str+=i;
             str+=" ";
        }
       
    }
    console.log(str);
}
fizzbuzz("90123");
