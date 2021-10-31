const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}
document.getElementById("copyrightyear").textContent = new Date().toLocaleDateString('en-us', options);


function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

const today = new Date();
        console.log(today);
        const dayNumber = today.getDay();
        console.log(dayNumber);
        const element = document.getElementById("message");

        if(dayNumber == 5) {
            element.classList.add("showme");
        } 
        else {
            element.classList.add("hideme");
        }