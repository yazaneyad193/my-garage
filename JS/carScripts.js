'use strict';
//Add Variables
var myCarsSubmission = document.getElementById('myCarsSubmission');
var myTable = document.getElementById('table-side');
var myCarsArray = [];
var carImagesNames = ['bmw.png', 'chevrolet.png', 'hyundai.png', 'kia.png', 'lexus.png',
    'tesla.png', 'toyota.png'];



function myCarGarage(carName, categoryModel, modelYear) {

    this.carName = carName;
    this.categoryModel = categoryModel;
    this.modelYear = modelYear;
    myCarsArray.push(this);


}

myCarGarage.prototype.renderCars = function () {

    for (var index = 0; index < myCarsArray.length; index++) {
        var tableRow = document.createElement('tr');
        var tdImage = document.createElement('td');
        tdImage.textContent = myCarsArray[index].carName;

        var tdData = document.createElement('td');
        tdData.textContent = 'Car Name : ' + myCarsArray[index].carName + ' \nModel Year: ' + myCarsArray[index].modelYear;

        tableRow.appendChild(tdImage);
        tableRow.appendChild(tdData);

    }

    myTable.appendChild(tableRow);

}


function carSubmission(event) {
    event.preventDefault();
    var carName = event.target.carName.value;
    var categoryModel = event.target.categoryModel.value;
    var modelYear = event.target.modelYear.value;
    var carGarage = new myCarGarage(carName, categoryModel, modelYear);
    carGarage.renderCars();
    localStorage.setItem('cars', JSON.stringify(myCarsArray));

}

function getLs() {
    if (localStorage.getItem('cars')) {

        var myCarsArray = JSON.parse(localStorage.getItem('cars'));
        for (var index = 0; index < myCarsArray.length; index++) {
            var myCarName = myCarsArray[index].carName;
            var categoryModel = myCarsArray[index].categoryModel;
            var modelYear = myCarsArray[index].modelYear;
        }
        var carsGarage = new myCarGarage(myCarName, categoryModel, modelYear);
        carsGarage.renderCars();

    }

}


//eventListener

myCarsSubmission.addEventListener('submit', carSubmission);

getLs();