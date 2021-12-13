const requestURL = '/lesson12/sanantonio.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject); 

      const business = jsonObject;

      for (let i = 0; i < business.length; i++ ) {
        
        let card = document.createElement('section');
        let data =document.createElement("div")
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');

        let website = document.createElement('a');
        let motto = document.createElement('p');
        let phone = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = business[i].name ;
        motto.textContent = business[i].motto;
        website.textContent = business[i].website;
        website.setAttribute("href","http://"+business[i].website)
        phone.textContent = business[i].phone[0].number;

       
        image.setAttribute('alt', business[i].name);
        image.setAttribute("src",business[i].logo)
        data.className="data"
        data.appendChild(h2);
        data.appendChild(motto);
        data.appendChild(website);
        data.appendChild(phone);
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



