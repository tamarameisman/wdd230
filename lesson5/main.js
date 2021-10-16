const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');
const main = document.querySelector('main')
 
button.addEventListener("click", function() {
    let input = document.getElementById("favchap");
    
    console.log(input.value);
    if(input.value !== ""){
        const newButton = document.createElement("button");
        const newText = document.createElement("span");
        const newList = document.createElement("li");
        
        
        newList.appendChild(newText)
        newText.textContent = input.value;
        newList.appendChild(newButton);
        newButton.textContent = "\u274c";
        list.appendChild(newList);
        
        newButton.addEventListener("click", function(){
            list.removeChild(newList);
        });
        input.value = ""
    }
    input.focus();
});
          




 //document.getElementById("mybtn").addEventListener("click", function() {
     //let input = document.getElementById("favchap").value;
    
    //console.log(input);
    //if(input !== ""){
        //const newButton = document.createElement("button");
        //newButton.innerHTML ="\u274C";

        //const newList = document.createElement("li");
        //newList.textContent =input;
        //newList.appendChild(newButton);

    //document.getElementById("list").appendChild(newList);
    
    //document.getElementById("favchap").value = ""
    //end of the if
    //document.getElementById("button").addEventListener("click", delete){

    //}

    //}
    
 //}); 


 