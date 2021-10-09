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