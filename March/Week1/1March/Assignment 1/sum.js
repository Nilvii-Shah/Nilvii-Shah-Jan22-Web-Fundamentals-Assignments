function add(){
    var num1 = document.getElementById("sum1").value;
    num1 = parseInt(num1)
    var num2 = document.getElementById("sum2").value;
    num2 = parseInt(num2);
    var sum = num1 +num2 ;
    
    document.getElementById("answer").value = sum ;
    
}