
//***** CAROUSEL ******

const uparrow = document.querySelector(".uparrowimg");
const downarrow = document.querySelector(".downarrowimg");

let track = document.getElementById("track");
const trackHeight = document.getElementById("track").offsetHeight;
const carouselHeight = document.querySelector(".carousel-container").offsetHeight;
const carousel =  document.querySelector(".carousel-container");

let loader = document.querySelector('.loading')
let bgBox = document.querySelector('.carimage')

let body = document.getElementsByTagName("BODY")[0];

const loadRemove = () => {
    console.log("loaded");
    loader.classList.add("hide");
}

body.onload = () => {
loadRemove()
}






//*** SIDEBAR WHEELS ***



//WHEEL OBJECTS ARRAY

import { wheelsArray } from "./wheels.js"


//LOOP THROUGH WHEELS ARRAY
let activeArray = wheelsArray;
activeArray.forEach(wheel => {
        let newWheel = document.createElement("IMG");
        
        newWheel.src = wheel.imgSource;
        newWheel.classList.add("wheelstandard");
        newWheel.id = wheel.idName;
        track.appendChild(newWheel);

        let bgImage = document.querySelector('.carimage')
        newWheel.onclick = function changeWheels() {
            
            loader.classList.remove("hide");
            let tempImage = new Image(200,100);
            tempImage.src = wheel.temp;
            tempImage.onload = () => {
                bgImage.style.backgroundImage = wheel.backImage;
                loader.classList.add("hide");
                tempImage.remove();
            }
        }
    });


let index = 0;
let wheelDivision = activeArray.length/4;
let roundedDivision = Math.ceil(wheelDivision);


//*** FILTER ***

let filterButton = document.querySelector(".filtericonimg");
let fltrIndex = 1;

filterButton.onclick = function toggleFilter() {

fltrIndex++
console.log(fltrIndex);

if (fltrIndex % 2 == 0) {
    track.style.display = "none";
    filterContainer.style.display = "flex";
    filterButton.src = "Assets/Group 25 Active.png";
} else {
    track.style.display = "flex";
    filterContainer.style.display = "none";
    filterButton.src = "Assets/Group 25.png";
    if (filterOptions !== undefined){
        filterOptions.remove();
    }
}
}

// FILTER OBJECTS ARRAY 

import { filterArray } from "./wheels.js";
import { brandOptionsArray } from "./wheels.js";
import { colourOptionsArray } from "./wheels.js";
import { spokesOptionsArray } from "./wheels.js";

//LOOP THROUGH FILTER ARRAY


let filterContainer = document.createElement("DIV");
filterContainer.classList.add("filtercontainer");
carousel.appendChild(filterContainer);
let filterOptions;

filterArray.forEach(filter => {
    let newFilter = document.createElement("button");

    newFilter.innerHTML = filter.btnText;
    newFilter.classList.add("filterstandard");
    newFilter.style.cursor = "pointer";
    filterContainer.appendChild(newFilter);

    newFilter.onclick = function showOptions() {

        filterContainer.style.display = filter.hide;
        let selectedFilter = filter.id;
        filterOptions = document.createElement("DIV");
        filterOptions.classList.add("filteroptions");
        carousel.appendChild(filterOptions);

        switch (selectedFilter) {
            case "brand":
                brandOptionsArray.forEach(option => {
                    let brandOption = document.createElement("button");
                    filterOptions.appendChild(brandOption);
                    brandOption.innerHTML = option;
                    brandOption.classList.add("filterstandard");

                    brandOption.onclick = function filterArray() {
                        let selectedOption = option;
                        console.log(selectedOption);
                        filterOptions.style.display ="none";
                        fltrIndex++;
                        filterButton.src = "Assets/Group 25.png";
                        console.log(fltrIndex);

                        activeArray = wheelsArray.filter(wheel => {
                            return wheel.brand === selectedOption;
                        });


                        track.remove();
                        track = document.createElement("div");
                        carousel.appendChild(track);
                        track.id = "track";

                        activeArray.forEach(wheel => {
                            const newWheel = document.createElement("IMG");
                            newWheel.src = wheel.imgSource;
                            newWheel.classList.add("wheelstandard");
                            newWheel.id = wheel.idName;
                            track.appendChild(newWheel);

                            newWheel.onclick = function changeWheels() {
                                let bgImage = document.querySelector('.carimage')
                                loader.classList.remove("hide");
                                let tempImage = new Image(200,100);
                                tempImage.src = wheel.temp;
                                tempImage.onload = () => {
                                    bgImage.style.backgroundImage = wheel.backImage;
                                    loader.classList.add("hide");
                                    tempImage.remove();
                                }
                            }
                            
                        })
                        
                        
                        console.log(activeArray);

                    }
                })
                
                break;

            case "colour":
                colourOptionsArray.forEach(option => {
                    let colourOption = document.createElement("button");
                    filterOptions.appendChild(colourOption);
                    colourOption.innerHTML = option;
                    colourOption.classList.add("filterstandard");

                    colourOption.onclick = function filterArray() {
                        let selectedOption = option;
                        console.log(selectedOption);
                        filterOptions.style.display ="none";
                        fltrIndex++;
                        filterButton.src = "Assets/Group 25.png";

                        let activeArray = wheelsArray.filter(wheel => {
                            return wheel.colour === selectedOption;
                        });


                        track.remove();
                        track = document.createElement("div");
                        carousel.appendChild(track);
                        track.id = "track";

                        activeArray.forEach(wheel => {
                            const newWheel = document.createElement("IMG");
                            newWheel.src = wheel.imgSource;
                            newWheel.classList.add("wheelstandard");
                            newWheel.id = wheel.idName;
                            track.appendChild(newWheel);

                            newWheel.onclick = function changeWheels() {
                                let bgImage = document.querySelector('.carimage')
                                loader.classList.remove("hide");
                                let tempImage = new Image(200,100);
                                tempImage.src = wheel.temp;
                                tempImage.onload = () => {
                                    bgImage.style.backgroundImage = wheel.backImage;
                                    loader.classList.add("hide");
                                    tempImage.remove();
                                }
                            }
                            
                        })

                    }
                })

                break;

            case "spokes":
                spokesOptionsArray.forEach(option => {
                    let spokesOption = document.createElement("button");
                    filterOptions.appendChild(spokesOption);
                    spokesOption.innerHTML = option;
                    spokesOption.classList.add("filterstandard");

                    spokesOption.onclick = function filterArray() {
                        let selectedOption = option;
                        console.log(selectedOption);
                        filterOptions.style.display ="none";
                        fltrIndex++;
                        filterButton.src = "Assets/Group 25.png";

                        let activeArray = wheelsArray.filter(wheel => {
                            return wheel.spokes === selectedOption;
                        });


                        track.remove();
                        track = document.createElement("div");
                        carousel.appendChild(track);
                        track.id = "track";

                        activeArray.forEach(wheel => {
                            const newWheel = document.createElement("IMG");
                            newWheel.src = wheel.imgSource;
                            newWheel.classList.add("wheelstandard");
                            newWheel.id = wheel.idName;
                            track.appendChild(newWheel);

                            newWheel.onclick = function changeWheels() {
                                let bgImage = document.querySelector('.carimage')
                                loader.classList.remove("hide");
                                let tempImage = new Image(200,100);
                                tempImage.src = wheel.temp;
                                tempImage.onload = () => {
                                    bgImage.style.backgroundImage = wheel.backImage;
                                    loader.classList.add("hide");
                                    tempImage.remove();
                                }
                            }
                            
                        })
                        console.log(filteredArray);

                    }
                })

                break;
        }
        console.log(filterOptions);
        console.log(selectedFilter);
    }
})








//***ARRAY.FILTER***/





//UPARROW
uparrow.addEventListener("click", () => {
    index--
    track.style.transform = `translateY(-${index * carouselHeight}px)`
    downarrow.classList.remove("hide");

    if(index === 0) {
        uparrow.classList.remove("show");
    }
    
})

//DOWNARROW
downarrow.addEventListener("click", () => {
    index++;
    uparrow.classList.add("show");
    track.style.transform = `translateY(-${index * carouselHeight}px)`;
    
    if (roundedDivision - 1 === index) {
        downarrow.classList.add("hide")
    }
    
})


//***** WHEEL SHOW AND HIDE *****

/*
let shownWheels = document.querySelector(".displayed-wheels");
let wheelChoice = document.querySelector(".wheel2img");

wheelChoice.addEventListener("click", () => {
    shownWheels.classList.toggle("show");
    wheelChoice.classList.toggle("selected");
})


//***** DRAGGABLE WHEELS *****


//FRONT OR REAR
let activeWheel = document.querySelector(".front-wheel");

//FRONT WHEEL
const el = activeWheel;
el.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mouseMove(e) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = el.getBoundingClientRect();

        el.style.left = rect.left - newX + "px";
        el.style.top = rect.top - newY + "px";

        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseUp() {
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("mouseup", mouseUp);
    }
}
*/


