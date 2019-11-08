//define variables
var specialChar = " !$%'()*+,-./:;<=>?@[]^_`{|}~";
var spec = specialChar.split("");
var numericChar = "1234567890";
var numer = numericChar.split("");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
var lowerc = lowercaseChar.split("");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperc = uppercaseChar.split("");
//why did I do it this way this is
var justLetters = lowerc.concat(upperc);
var lowerSpec = lowerc.concat(spec);
var lowerNum = lowerc.concat(numer);
var lowerSpecNum = lowerc.concat(spec, numer);
var upperNum = upperc.concat(numer);
var upperSpec = upperc.concat(spec);
var upperSpecnum = upperc.concat(spec, numer);
var numerLetters = lowerc.concat(upperc, numer);
var specLetters = lowerc.concat(upperc, spec);
var allChar = lowerc.concat(upperc, numer, spec);

console.log(upperc[24]);
console.log(upperc[14]);

var copyButt = document.querySelector("#butt2");
var genButt = document.querySelector("#butt1");
var textarena = document.querySelector("textarea");
var password = '';

//prompt for length(between 8 and 128 characters)

genButt.addEventListener("click", genPassword);


function genPassword() {

    var userLength = prompt("How long of a password would you like? (Must chose between 8 and 128 characters)");
    if (!isNumber(userLength)) {
        alert("Please enter a number between 8 and 128.");
        return;
    }

    if (userLength > 128 || userLength < 8) {
        alert("Please enter a number between 8 and 128.");
        return;
    } else {
        console.log("user chose: " + userLength);
    }

    //confirm special characters?
    var confirmSpecial = confirm("Include special characters?");
    console.log("Special? " + confirmSpecial);

    //confirm numeric characters
    var confirmNumeric = confirm("Include numeric characters?");
    console.log("Numeric? " + confirmNumeric);
    
    //confirm lowercase characters
    var confirmLowercase = confirm("Include lowercase characters?");
    console.log("Lowercase? " + confirmLowercase);
    
    //confirm uppercase characters
    var confirmUppercase = confirm("Include uppercase characters?");
    console.log("Uppercase? " + confirmUppercase);
    
    if (confirmSpecial && confirmNumeric && confirmLowercase && confirmUppercase) {
        
        randomizer(allChar);
        textarena.textContent = password;
        return;
    
    } else if (confirmUppercase === false && confirmNumeric === false && confirmSpecial === false) {
    
        randomizer(lowerc);
        textarena.textContent = password;
        return;

    } else if (confirmLowercase === false && confirmNumeric === false && confirmSpecial === false) {
    
        randomizer(upperc);
        textarena.textContent = password;
        
    } else if (confirmLowercase === false && confirmNumeric && confirmSpecial && confirmUppercase) {

        randomizer(upperSpecnum);
        textarena.textContent = password;

    } else if (confirmUppercase === false && confirmNumeric && confirmSpecial && confirmLowercase) {

        randomizer(lowerSpecnum);
        textarena.textContent = password;

    } else if (confirmNumeric === false && confirmSpecial === false) {

        randomizer(justLetters);
        textarena.textContent = password;

    } else if (confirmUppercase === false && confirmNumeric === false) {

        randomizer(lowerSpec);
        textarena.textContent = password;

    } else if (confirmUppercase === false && confirmSpecial === false) {

        randomizer(lowerNum);
        textarena.textContent = password;

    } else if (confirmLowercase === false && confirmSpecial === false) {

        randomizer(upperNum);
        textarena.textContent = password;

    } else if (confirmLowercase === false && confirmNumeric === false) {

        randomizer(upperSpec);
        textarena.textContent = password;
        

    } else if (confirmSpecial === false && confirmLowercase && confirmUppercase && confirmNumeric) {

        randomizer(numerLetters);
        textarena.textContent = password;

    } else if (confirmSpecial && confirmLowercase && confirmUppercase && confirmNumeric === false) {

        randomizer(specLetters);
        textarena.textContent = password;

    }
    //ensure at least one is selected
    else if (confirmSpecial === false && confirmNumeric === false && confirmLowercase === false && confirmUppercase === false) {
        alert("You must include at least one option!");
        return;

    } else if (confirmLowercase === false && confirmUppercase === false) {
        alert("You must include some letters!");
        return;
    }

    //picks randomly from arrays


    //write generated password to page

    function randomizer(arr) {


        for (var i = 0; i < userLength; i++) {
            password += arr[Math.floor(Math.random() * arr.length)];
        }

        textarena.setAttribute("value", password);

        console.log("your randomly generated password is: " + password);

        return password;
    }
}

//click to copy

function copy() {
    var copyText = document.querySelector("textarea");
    copyText.select();
    document.execCommand("copy");
}

copyButt.addEventListener("click", copy);

//is it a number

function isNumber(value) {
    var numberPattern = /^[0-9]+$/; // one or more of digits 0 to 9
    return numberPattern.test(value);
}