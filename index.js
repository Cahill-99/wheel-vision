
//***** DECLARATIONS ******

const uparrow = document.querySelector(".uparrowimg");
const downarrow = document.querySelector(".downarrowimg");

let track = document.getElementById("track");
const carouselHeight = document.querySelector(".carousel-container").offsetHeight;
const carousel =  document.querySelector(".carousel-container");
const col2Arr = Array.from(document.getElementsByClassName("col2"));

const backBtn = document.querySelector(".backbuttonimg");
const bgImage = document.querySelector('.carimage')

let loader = document.querySelector('.loading')

let body = document.getElementsByTagName("BODY")[0];

const loadRemove = () => {
    console.log("loaded");
    loader.classList.add("hide");
}

body.onload = () => {
loadRemove()
}

// let testElement;


// backBtn.onclick = function showElement() {
//     testElement = document.createElement("IMG");
//     testElement.src = "img/YellowCaliper.png"
//     testElement.classList.add("activecaliper");
//     bgImage.appendChild(testElement);


// }



//*** SIDEBAR WHEELS ***


//let shownWheels = document.querySelector(".displayed-wheels");



//WHEEL OBJECTS ARRAY

import { wheelsArray } from "./wheels.js"
let activeArray = wheelsArray;




//LOOP THROUGH WHEELS ARRAY

activeArray.forEach(wheel => {
        let newWheel = document.createElement("IMG");
        
        newWheel.src = wheel.imgSource;
        newWheel.classList.add("wheelstandard");
        newWheel.id = wheel.idName;
        track.appendChild(newWheel);

        
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

let filterContainer = document.createElement("DIV");               /* MIDDLE BUTTON*/

let filterOptions;

let middleButton = document.querySelector(".middlebuttonimg");
let fltrIndex = 1;

if (middleButton.src !== "Assets/Group 25 Reset.png"){
middleButton.onclick = function toggleFilter() {
console.log(middleButton.src)
fltrIndex++


filterContainer.classList.add("filtercontainer");
carousel.appendChild(filterContainer);
//filterContainer.style.display = "flex";


if (fltrIndex % 2 == 0) {
    track.style.display = "none";
    col2Arr.forEach(arrow => {
        arrow.style.display = "none"
    })
    filterContainer.style.display = "flex";
    middleButton.src = "Assets/Group 25 Active.png";
} else {
    track.style.display = "flex";
    col2Arr.forEach(arrow => {
        arrow.style.display = "block"
    })
    filterContainer.style.display = "none";
    middleButton.src = "Assets/Group 25.png";
    if (filterOptions !== undefined){
        filterOptions.remove();
    }
}
}
}

// FILTER OBJECTS ARRAY 

import { filterArray } from "./wheels.js";
import { brandOptionsArray } from "./wheels.js";
import { colourOptionsArray } from "./wheels.js";
import { spokesOptionsArray } from "./wheels.js";
import { resetOptionsArray } from "./wheels.js";

//LOOP THROUGH FILTER ARRAY
let trackReset = () => {

    track.remove();
    track = document.createElement("div");
    carousel.appendChild(track);
    track.id = "track";
}

let activeWheels = () => {
    activeArray.forEach(wheel => {
        const newWheel = document.createElement("IMG");
        newWheel.src = wheel.imgSource;
        newWheel.classList.add("wheelstandard");
        newWheel.id = wheel.idName;
        track.appendChild(newWheel);

        newWheel.onclick = function changeWheels() {

           // shownWheels.classList.toggle("show");
           // newWheel.classList.toggle("selected");

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
    index = 0;
    wheelDivision = activeArray.length/4;
    roundedDivision = Math.ceil(wheelDivision);

        col2Arr.forEach(arrow => {
            arrow.style.display = "block"
            uparrow.style.display = "none";
       });


    if (roundedDivision > 1) {
        downarrow.style.display = "block";
        downarrow.classList.remove("hide");
    }
    }


function filterOperation(option, filterCategory) {
    let newOption = document.createElement("button");
    filterOptions.appendChild(newOption);
    if (option === "RESET") {
        newOption.innerHTML = "SHOW ALL";
    } else {
    newOption.innerHTML = option;
    };
    let selectedOption = option;
    newOption.classList.add("filterstandard");

    newOption.onclick = function filterArray() {

        col2Arr.forEach(arrow => {
            arrow.style.display = "block"
        })
        filterOptions.style.display ="none";
        fltrIndex++;
        middleButton.src = "Assets/Group 25.png";

        activeArray = wheelsArray.filter(wheel => {
            return wheel[filterCategory] === selectedOption;
        });

        wheelDivision = activeArray.length/4;
        roundedDivision = Math.ceil(wheelDivision);

        uparrow.classList.remove("show");

        if (roundedDivision === 1) {
            downarrow.classList.add("hide")
        } else {
            downarrow.classList.remove("hide");
        }

        index = 0;
        console.log(roundedDivision);

        filterContainer.remove();
        
        trackReset();
        activeWheels();              
                            
        console.log(activeArray);
    
        }
    }






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
                brandOptionsArray.forEach(option=> {
                    let brand = "brand"
                    filterOperation(option, brand);

                })
                
                break;

            case "colour":
                colourOptionsArray.forEach(option => {
                    let colour = "colour"
                    filterOperation(option, colour);
                })

                break;

            case "spokes":
                spokesOptionsArray.forEach(option => {
                    let spokes = "spokes"

                   filterOperation(option, spokes);
                })

                break;
            case "reset":
                resetOptionsArray.forEach(option => {
                    let reset = "reset"
                    console.log(option);
                    filterOperation(option, reset);
                })

                break;
        }

    }
})





// TOGGLE CALIPERS OR WHEELS

import { calipersArray } from "./wheels.js";

let caliperIcon = document.querySelector(".calipericonimg");
let wheelIcon = document.querySelector(".wheeliconimg");

let caliperBg = document.querySelector(".calipericon");
let wheelBg = document.querySelector(".wheelicon");

let backBg = document.querySelector(".backbutton");
let colFiller = document.querySelector(".colfiller");


caliperIcon.onclick = function switchToCalipers() {


    trackReset();


    caliperBg.style.backgroundColor = "#2b2b2b";
    wheelBg.style.backgroundColor = "#161616";
    wheelIcon.style.height = "60px";
    caliperIcon.style.height = "80px";
    backBg.classList.add("removeedges");
    wheelBg.classList.add("roundEdges");

    colFiller.classList.add("colfillerround");

    calipersArray.forEach(item => {
        let newCaliper = document.createElement("IMG");
            
        newCaliper.src = item.imgSource;
        newCaliper.classList.add("caliperstandard");
        newCaliper.id = item.idName;
        track.appendChild(newCaliper);

        col2Arr.forEach(arrow => {
            arrow.style.display = "none"
        });

    })

    middleButton.src = "Assets/Group 25 Reset.png";
}


wheelIcon.onclick = function switchToWheels() {

    trackReset();
    activeWheels();


    caliperBg.style.backgroundColor = "#161616";
    wheelBg.style.backgroundColor = "#2b2b2b";
    wheelIcon.style.height = "80px";
    caliperIcon.style.height = "60px";

    backBg.classList.remove("removeedges");
    colFiller.classList.remove("colfillerround");

    

    
        
    middleButton.src = "Assets/Group 25.png";
    
    console.log
    console.log(roundedDivision);
}





//UPARROW
uparrow.addEventListener("click", () => {
    index--;
    track.style.transform = `translateY(-${index * carouselHeight}px)`
    downarrow.classList.remove("hide");

    if(index === 0) {
        uparrow.classList.remove("show");
        uparrow.style.display = "none";
    }
    console.log(index);
})

//DOWNARROW
downarrow.addEventListener("click", () => {
    index++;
    uparrow.classList.add("show");
    uparrow.style.display = "block"
    track.style.transform = `translateY(-${index * carouselHeight}px)`;
    
    if (roundedDivision - 1 === index ) {
        downarrow.classList.add("hide");
    }
    console.log(index);
    console.log(roundedDivision)
})


//***** WHEEL SHOW AND HIDE *****







//***** DRAGGABLE WHEELS *****


//FRONT OR REAR
let activeWheel = document.querySelector(".front-wheel");

//FRONT WHEEL
const el = document.querySelector(".activeCaliper");
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



