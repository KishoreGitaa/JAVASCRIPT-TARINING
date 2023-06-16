function number(a){

    let number = a
    let range = 10
    for (let i=1;i<=range;i++){
        let table = number * i
        console.log(number,"*",i,"=",table);
    }

}

for (let i=1; i<=10; i++){
    number(i)
}

for (let i=21; i <= 30; i++){
    console.log("");
    for (let j=21; j<=30; j++){
    
       console.log("akash",i);
    
    }
}



function printName(name){
    
    for (let i=1; i <= 10; i++){  
       console.log(name);
    }

}
printName("kishore");

function isDifferent (a,b){
    if(a === b){
        console.log("same");
    }else{
        console.log("different");
    }
}
isDifferent(1,"1")
