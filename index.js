const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const output = document.querySelector(".output");

button.disabled = true;

input.addEventListener('input' , () => {
    if (input.value.length > 0 ){
        button.disabled = false;
        
    } 
    
    if(input.value.length === 6){
        output.innerText = "cannot have more than 6"
        
    } 
     else if (input.value.length <= 5) {
        output.innerText= ""
    }
   
})

