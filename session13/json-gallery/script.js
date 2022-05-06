// Starter JSON Request Code:
// https://www.w3schools.com/js/js_ajax_http.asp

// call the loadData function to load the JSON data and generate the gallery
loadData();

function loadData() {
    // Create an XMLHttpRequest object
    const xhttp = new XMLHttpRequest();

    // Define a callback function
    xhttp.onload = function() {
        // Here you can use the Data

        // parse the raw text string into JSON format
        let imageData = JSON.parse(this.response);

        // pass the JSON formatted data into our function
        generateGallery(imageData);

    }

    // Send a request
    xhttp.open("GET", "images.json");
    xhttp.send();
}


function generateGallery(data) {


    // store the gallery div in a variable
    const gallery = document.querySelector('.gallery');


    // // standard for-loop
    // for(let i = 0; i < data.images.length; i++) {
    //     //console.log(data.images[i])
    // }

    
    // // for each loop
    // data.images.forEach(img => {
    //     //console.log(img);
    // })


    // for-of loop
    for(let imageData of data.images) {
        //console.log(img);

        // create a card to hold the image and caption
        const card = document.createElement('div');

        // add the "card" class to the card
        card.classList.add('card')

        // create a new Image element
        const newImage = new Image();
        console.log(newImage);

        // set the image src to the img_src property from the JSON
        newImage.src = `images/${imageData.img_src}`;

        // set the image alt to the alt property from the JSON
        newImage.alt = imageData.alt;

        // add the "card__img" class to the image element
        newImage.classList.add("card__img");

        let caption = document.createElement("p");
        caption.classList.add("card__caption");
        caption.textContent = imageData.alt;

        // add the image and caption elements to the card div
        card.appendChild(newImage);
        card.appendChild(caption)

        // add the card to the gallery div
        gallery.appendChild(card);
    }





    // loop through all the image entries in the JSON data

    
    // construct image cards with the data from each image entry


    // append image card to the DOM (specifically, the gallery div)
    
}