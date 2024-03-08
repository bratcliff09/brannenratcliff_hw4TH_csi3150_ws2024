const usedCars = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
  },
  // Additional entries:
  {
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
  },
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
  },
  //My additions
  {
    year: 2010,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
  },
  {
    year: 1998,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
  },
  {
    year: 1998,
    make: "KiaPa",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
  },
  {
    year: 1998,
    make: "Honda",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
  },
];

const result = document.getElementById("result");
const carMakeList = document.getElementById("car-make-ul");
const carColorList = document.getElementById("car-color-ul");

const priceMin = document.getElementById("price-min-input");
const priceMax = document.getElementById("price-max-input");
const yearMin = document.getElementById("year-min-input");
const yearMax = document.getElementById("year-max-input");
const mileageMax = document.getElementById("mileage-input");

const burgerBtn = document.getElementById("burger-btn");

//Fills the filter sidebar based on the attributes of usedCars===========================

//Gets the car makes from the usedCars array
function addCarMakes() {
  const brandList = usedCars.map((element) => element.make).filter(onlyUnique);

  const newContent = brandList
    .map((element) => checkboxHTML(element, "carMakeCheck", "brandCheck"))
    .join("");
  carMakeList.innerHTML += newContent;
}

//Gets the car colors from the usedCars array
function addCarColors() {
  const brandList = usedCars.map((element) => element.color).filter(onlyUnique);

  const newContent = brandList
    .map((element) => checkboxHTML(element, "carColorCheck", "colorCheck"))
    .join("");
  carColorList.innerHTML += newContent;
}

function onlyUnique(value, index, array) {
  //https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
  return array.indexOf(value) === index;
}

function checkboxHTML(elementName, className, type) {
  const listElement = `
    <li>
      <label for="${elementName}-${type}">${elementName}</label>
      <input type="checkbox" id="${elementName}-${type}" class="${className}" name="${elementName}"/>
    </li>
  `;
  return listElement;
}

//Max and Min filters =============================

function priceFilter(array, minInput, maxInput) {
  let p = array;

  if (numberValidate(minInput.value.trim())) {
    p = p.filter((element) => minFilter(element.price, minInput.value.trim()));
  }

  if (numberValidate(maxInput.value.trim())) {
    p = p.filter((element) => maxFilter(element.price, maxInput.value.trim()));
  }

  return p;
}

function yearFilter(array, minInput, maxInput) {
  let p = array;

  if (numberValidate(minInput.value.trim())) {
    p = p.filter((element) => minFilter(element.year, minInput.value.trim()));
  }

  if (numberValidate(maxInput.value.trim())) {
    p = p.filter((element) => maxFilter(element.year, maxInput.value.trim()));
  }

  return p;
}

function mileageFilter(array, maxInput) {
  let p = array;

  if (numberValidate(maxInput.value.trim())) {
    p = p.filter((element) =>
      maxFilter(element.mileage, maxInput.value.trim())
    );
  }

  return p;
}

//checks if an input text field is empty
function isEmpty(words) {
  if (words.trim().length === 0) {
    return true;
  }
  return false;
}

//validates if a string is a number or not
//returns true of it's a number
function numberValidate(x) {
  if (isNaN(x) || isEmpty(x)) {
    //console.log("Not a number, or it's just empty: " + x);
    return false;
  }
  //console.log("Is a number: " + x);
  return true;
}

function minFilter(element, min) {
  return element >= min;
}

function maxFilter(element, max) {
  return element <= max;
}

//Checkbox filters================================

function brandFilter(array) {
  let p = array;

  //An array of the names of the checked checkboxes
  const names = Array.from(
    document.querySelectorAll(".carMakeCheck:checked")
  ).map((element) => element.name);

  //Treat no checkmarks clicked the same as if every checkmark was clicked
  if (names.length != 0) {
    p = p.filter((element) => checkboxFilter(element.make, names));
  }
  return p;
}

function colorFilter(array) {
  let p = array;

  //An array of the names of the checked checkboxes
  const colors = Array.from(
    document.querySelectorAll(".carColorCheck:checked")
  ).map((element) => element.name);

  if (colors.length != 0) {
    p = p.filter((element) => checkboxFilter(element.color, colors));
  }
  return p;
}

function checkboxFilter(element, array) {
  return array.includes(element);
}

//The car product cards ==============================================

function makeProductCard(carData) {
  const { year, make, model, mileage, price, color, gasMileage } = carData;

  /*Creates a HTML productCard then inserts it into the DOM structure*/
  const cardTemplate = `
    <div class="product-card">
      <img src="./assets/img/carPlaceHolder.jpg" alt="image of a car">
      <div class="top">
          <span>
            <p>${year} ${make}</p>
          </span>
          <p>${model}</p>
          <p>$${price}</p>
      </div>
      <div class="mid">
          <p>More Info:</p>
          <div class="more-info">
              <p>Color: ${color}</p>
              <p>Milage: ${mileage}</p>
              <p>Gas Milage: ${gasMileage}</p>
          </div>
      </div>
      <div class="bot">
          <button>Buy Now</button>
          <button>More Details</button>
      </div>
    </div>
  `;
  return cardTemplate;
}

function showResult() {
  const filteredCars = mainFilter();
  const newContent = filteredCars.map(makeProductCard).join("");
  result.innerHTML += newContent || "<p>No Results Found</p>";
}

function clearResult() {
  result.innerHTML = "";
}

//=================================================================
function mainFilter() {
  let a = usedCars;
  a = priceFilter(a, priceMin, priceMax);
  a = yearFilter(a, yearMin, yearMax);
  a = mileageFilter(a, mileageMax);
  a = brandFilter(a);
  a = colorFilter(a);

  return a;
}

function goForItTwo() {
  clearResult();
  showResult();
}

//Resets the inputs on inital or reload
function resetOnLoad() {
  priceMin.value = "";
  priceMax.value = "";
  yearMin.value = "";
  yearMax.value = "";
  mileageMax.value = "";
  //Checkboxes are reset by default
}

function checkHandler(event) {
  goForItTwo();
}

function burgerHandler(event) {
  document.body.classList.toggle("open");
}

carMakeList.addEventListener("change", checkHandler);
carColorList.addEventListener("change", checkHandler);
burgerBtn.onclick = function () {
  document.body.classList.toggle("open");
};
//gets each "Go" button and makes them do the same thing
const blue = document.querySelectorAll("#filter-form");
Array.from(blue).map((element) =>
  element.addEventListener("submit", function (event) {
    event.preventDefault();
    goForItTwo();
  })
);

async function init() {
  resetOnLoad();
  addCarMakes();
  addCarColors();
  goForItTwo();
}
init();
