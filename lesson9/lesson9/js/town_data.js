const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject); 

      const towns = jsonObject['towns'];

      for (let i = 0; i < towns.length; i++ ) {
        
        let card = document.createElement('section');
        let data =document.createElement("div")
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');

        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let events = document.createElement('p');
        let eventList = document.createElement('ul')
        let image = document.createElement('img');

        h2.textContent = towns[i].name ;
        yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
        currentPopulation.textContent = "Population: " + towns[i].currentPopulation;
        averageRainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
        events.textContent = "Events: ";

        towns[i].events.forEach(event => {
            let li = document.createElement("li")
            li.textContent = event
            eventList.appendChild(li)
        });
        image.setAttribute('alt', towns[i].name + " " + towns[i].motto + " - " + towns[i].order);
        image.setAttribute("src","images/"+towns[i].photo)
        data.className="data"
        data.appendChild(h2);
        data.appendChild(yearFounded);
        data.appendChild(currentPopulation);
        data.appendChild(averageRainfall);
        data.appendChild(events);
        data.appendChild(eventList)
        card.appendChild(data)
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
    }

    const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

const imgOptions = {
    threshold: 1
};
//if this is true
if ('IntersectionObserver' in window) {
    // is supported so let's go!!!
    const imgObserver = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    // load image if necessary
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else { //just load all images if not supported
    imagesToLoad.forEach( (img) => {
        loadImages(img);
    });
}
  }); // temporary checking for valid response and data parsing



