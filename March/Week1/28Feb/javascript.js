function FizzBuzzGame(){
    var a = prompt("enter number");
    a = parseInt(a)
    if(isNaN(a)){
        document.write("enter a valid number")
    }
    else{
        for(let i = 1; i<=a; i++){
            if(i%3==0 && i%5==0 ){;
                document.write("fizzbuzz")
                document.write("<br>");
            }else if(i%3==0){
                document.write("fizz")
                document.write("<br>");
            }
            else if(i%5==0){
                document.write("buzz")
                document.write("<br>");
            }
            else{
                document.write(i)
                document.write("<br>")
            }
        }
    }     
}