const div=document.querySelector("div.mydiv");
for(let i=1 ; i<=100;i++){
    // const element=`<p class="box" $(i) >=$(i)</p> `;
    const newP=document.createElement("p")
    newP.innerHTML=`${i}`;
    newP.className=`box${i}`;
    div.append(newP)
    document.querySelector(`.box${i}`).style.backgroundColor="aqua"
    // div.innerHTML+=element
    console.log( i)
    if(i % 3==0){
        
        newP.innerHTML="Fizz";
        
        console.log("scrivo buzz")
        document.querySelector(`.box${i}`).style.backgroundColor="green"
        
    }
    else if(i % 3==0 && i % 5==0){
        newP.innerHTML="fizzbuzz"
        console.log("scrivo fizzbuzz")
        document.querySelector(`.box${i}`).style.backgroundColor="yellow"
        
    }
    else if( i % 5==0){
        newP.innerHTML="buzz"
        console.log("scrivo fizz")
        document.querySelector(`.box${i}`).style.backgroundColor="red"
        
    }
    

    
    
    
}
    
    
//    il mio ragionamento è impostare gli elemti da 1 a 100    fatto
//     imporre una condizione se sono multipli di 3 io scrivo buzz
//     se sono multipli di 3 && di 5 io scrivo fizzbuzz
//     se sono multipli di 5 io scrivo fizz
    
    
