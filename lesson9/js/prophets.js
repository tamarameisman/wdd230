const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject); 

      const prophets = jsonObject['prophets'];

      for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        birthDate.textContent = "Date of Birth: " + prophets[i].birthdate;
        birthPlace.textContent = "Place of Birth: " + prophets[i].birthplace;
        image.setAttribute('alt', prophets[i].name + " " + prophets[i].lastname + " - " + prophets[i].order);
        image.setAttribute("src",prophets[i].imageurl)
        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
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



