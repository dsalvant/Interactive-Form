/*Declare all global variables here and call each item from the DOM
use the .focus() to set page on focus on the name when the page is loaded */
const nameFocus = document.getElementById('name').focus();
const inputJobRoleNoShow = document.querySelector('input[id="other-title"]').style.display = 'none';
/* Call in the Job role from the DOM and add an event lister 
set the change got from the event to not display the input section when other is selected
*/
const otherJobRole = document.getElementById('title');
otherJobRole.addEventListener('change', () => {
    const inputJobRoleNoShow = document.querySelector('input[id="other-title"]');
    
    if (otherJobRole.value === 'other') {
        inputJobRoleNoShow.style.display = '';
    } else {
        inputJobRoleNoShow.style.display = 'none';
    }
});
/*T-shirt Info - call in the color and design section from the DOM as global var
use js to creat a blank element and prepend that new elem to the color section */

const color = document.getElementById('color');
const blankColor = document.createElement('option');
blankColor.value = 'blankColor';
color.prepend(blankColor);
/* use querySelector to call the colors elements to the script and assigned them each a value */
const cornJsPuns = document.querySelector('option[value="cornflowerblue"]');
const darkSlate = document.querySelector('option[value="darkslategrey"]');
const gold = document.querySelector('option[value="gold"]');
const tomato = document.querySelector('option[value="tomato"]');
const steelblue = document.querySelector('option[value="steelblue"]');
const dimgrey = document.querySelector('option[value="dimgrey"]');
/* add an eventlistener to the design to listen to change when user select different design to match it with the right color */
const design = document.getElementById('design');
design.firstChild.value = 'Select Theme';
design.addEventListener('change', () => {
    const color = document.getElementById('color');
    allJsPuns = () => {
        cornJsPuns.style.display = '';
        darkSlate.style.display = '';
        gold.style.display = '';
    }
    allHeartjs = () => {
        tomato.style.display = '';
        steelblue.style.display = '';
        dimgrey.style.display = '';
    }
    if (design.value === 'Select Theme') {
        color.value = blankColor;
        allJsPuns();
        allHeartjs();
    } else if (design.value === 'js puns') {
        color.value='gold' && 'darkslategrey' && 'cornflowerblue';
        allJsPuns();
        tomato.style.display = 'none';
        steelblue.style.display = 'none';
        dimgrey.style.display = 'none';
        blankColor.remove();
    }else if (design.value === 'heart js') {
        color.value= 'dimgrey' && 'steelblue' && 'tomato'  ;
        cornJsPuns.style.display = 'none';
        darkSlate.style.display = 'none';
        gold.style.display = 'none';
        allHeartjs();
        blankColor.remove(); // remove the blank option
    }
});
const registrate = document.querySelector('.activities');
var newElement = document.createElement('element');
newElement.textContent = 'Total Cost:';
registrate.appendChild(newElement);
var sum = 0;
registrate.addEventListener('change', (e) => {
    const allBoxes = registrate.querySelectorAll('input[type="checkbox"]');
    blkFrame = () => {
        allBoxes[1].disabled = true;
    }
    unBlkFrame = () => {
        allBoxes[1].disabled = false;
    }

    blkLibs = () => {
        allBoxes[2].disabled = true;
    }
    unBlkLibs = () => {
        allBoxes[2].disabled = false;
    }

    blockExpress = () => {
        allBoxes[3].disabled = true;
    }
    unBlockExpress = () => {
        allBoxes[3].disabled = false;
    }

    blkNode = () => {
        allBoxes[4].disabled = true;
    }
    unBlkNode = () => {
        allBoxes[4].disabled = false;
    }
    
    var time = e.target.getAttribute('data-day-and-time');
    var name = e.target.getAttribute('name');
    console.log(time);
    console.log(name);
    let allBoxChecked = e.target.checked;
    //console.log(allBoxes)
    if (allBoxChecked === true) {
        var cost = parseInt(e.target.getAttribute("data-cost"));
        sum += cost;
        console.log(cost);
        newElement.textContent = `Total Cost: $${sum}`;
    } else if (allBoxChecked === false) {
        var cost = parseInt(e.target.getAttribute("data-cost"));
        sum -= cost;
        console.log(cost);
        newElement.textContent = `Total Cost: $${sum}`;
    }

    if (allBoxChecked === true && name === 'js-frameworks') {
        blockExpress();
    } else if (allBoxChecked === false && name === 'js-frameworks') {
        unBlockExpress();
    }
    if (allBoxChecked === true && name === 'js-libs') {
        blkNode();
    } else if (allBoxChecked === false && name === 'js-libs') {
        unBlkNode();
    }
    if (allBoxChecked === true && name === 'express') {
        blkFrame();
    } else if (allBoxChecked === false && name === 'express') {
        unBlkFrame();
    }
    if (allBoxChecked === true && name === 'node') {
        blkLibs();
    } else if (allBoxChecked === false && name === 'node') {
        unBlkLibs();
    }

});   
// Calling the global variable for the payment section: 
var divCardShow = document.getElementById('credit-card');
var divPal = document.getElementById('paypal');
var divBit = document.getElementById('bitcoin');

//calling the payment section and add an EventListener to it
const selectPayment = document.getElementById('payment');
selectPayment.firstChild.value = 'select method';
console.log(selectPayment.value);
// adding an eventlistener to the payment section to know when change happen
selectPayment.addEventListener('change', (e) => {
    var divCardShow = document.getElementById('credit-card');
    var divPal = document.getElementById('paypal');
    var divBit = document.getElementById('bitcoin');
    //Creating functions for each section when they call
    methodLa = () => {
        divCardShow.style.display = '';
        divPal.style.display = '';
        divBit.style.display = '';
    }
    cardStuff = () => {
        divCardShow.style.display = '';
        divPal.style.display = 'none';
        divBit.style.display = 'none';
    }
    paypalStuff = () => {
        divPal.style.display = '';
        divCardShow.style.display = 'none';
        divBit.style.display = 'none';
    }
    bitcoinStuff = () => {
        divBit.style.display = '';
        divCardShow.style.display = 'none';
        divPal.style.display = 'none';
    }
    // putting my conditional statements if change happen to print the respected section
    if (selectPayment.value === 'select method') {
        methodLa();
        //console.log('ok');
    } else if (selectPayment.value === 'credit card') {
        cardStuff();
    } else if (selectPayment.value === 'paypal') {
        paypalStuff();
    } else if (selectPayment.value === 'bitcoin') {
        bitcoinStuff();
    } 
});
// Now creating a new element for the message to show up
const tooltipDiv = document.createElement('div');
tooltipDiv.className = 'tooltip';
divCardShow.appendChild(tooltipDiv);
// calling two type of listenner 
var ccNum = document.getElementById('cc-num');
var ccNumClick = document.getElementById('cc-num');
var ccNumInput = document.getElementById('cc-num');
//var ccValue = ccNum.value; 
console.log(ccNum.value);
isValid = false;
validateCcNumber = () => {
    var ccNum = document.getElementById('cc-num');
    var regexLa = /\d{13}/;
    if (regexLa.test(ccNum.value)) {
        isValid = true; 
    } 
    if (isValid) {
        console.log('remove ' + showSpan()); 
    } else {
        console.log('need valid visa number')
    }
}
showSpan = () => {
    const tooltipSpan = document.createElement('span');
    tooltipSpan.className = 'tooltipText';
    tooltipDiv.appendChild(tooltipSpan);
    tooltipSpan.style.color = 'red';
    tooltipSpan.textContent = `Please enter a number between 13 and 16 digits.`
}
ccNumClick.addEventListener('click', () => {showSpan(); if(ccNumInput.addEventListener('input', () => {validateCcNumber();})){}}); 


// now following same step to validate the Zip code
var zip = document.getElementById('zip');
var zipClick = document.getElementById('zip');
var zipInput = document.getElementById('zip');
//var ccValue = ccNum.value; 
console.log(zip.value);
isValid = false;
validateCcNumber = () => {
    var zip = document.getElementById('zip');
    var regexLa = /\d{5}/;
    if (regexLa.test(zip.value)) {
        isValid = true; 
    } 
    if (isValid) {
        console.log('remove ' + showSpan()); 
    } else {
        console.log('need valid visa number')
    }
}
showSpan = () => {
    const tooltipSpan = document.createElement('span');
    tooltipSpan.className = 'tooltipText';
    tooltipDiv.appendChild(tooltipSpan);
    tooltipSpan.style.color = 'red';
    tooltipSpan.textContent = `Please enter 5 digits.`
}
zipClick.addEventListener('click', () => {showSpan(); if(zipInput.addEventListener('input', () => {validateCcNumber();})){}}); 

// follow the same step for the cvv
var cvv = document.getElementById('cvv');
var cvvClick = document.getElementById('cvv');
var cvvInput = document.getElementById('cvv');
//var ccValue = ccNum.value; 
console.log(cvv.value);
isValid = false;
validateCcNumber = () => {
    var cvv = document.getElementById('cvv');
    var regexLa = /\d{3}/;
    if (regexLa.test(cvv.value)) {
        isValid = true; 
    } 
    if (isValid) {
        console.log('remove ' + showSpan()); 
    } else {
        console.log('need valid visa number')
    }
}
showSpan = () => {
    const tooltipSpan = document.createElement('span');
    tooltipSpan.className = 'tooltipText';
    tooltipDiv.appendChild(tooltipSpan);
    tooltipSpan.style.color = 'red';
    tooltipSpan.textContent = `Please enter 3 digits.`
}
cvvClick.addEventListener('click', () => {showSpan(); if(cvvInput.addEventListener('input', () => {validateCcNumber();})){}}); 
