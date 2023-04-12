function numberOperation(N,M){
    // Write your code here! 
        N *=40;
        N +=20;
        N -=50;
        if(N>M){
            console.log("Greater!");
        }else if(N==M){
            console.log("Equal!");
        }else{
            console.log("Lesser!");
        }
    }