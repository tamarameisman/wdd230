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
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');

        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let annualRain = document.createElement('p');

        let image = document.createElement('img');

        h2.textContent = towns[i].name ;
        yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
        population.textContent = "Population: " + towns[i].population;
        annualRain.textContent = "Annual Rain Fall: " + towns[i].annualRain;

        image.setAttribute('alt', towns[i].name + " " + towns[i].lastname + " - " + towns[i].order);
        image.setAttribute("src",towns[i].imageurl)
        card.appendChild(h2);
        card.appendChild(yearFounded);
        card.appendChild(population);
        card.appendChild(annualRain);

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



