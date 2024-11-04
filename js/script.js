// ## Normas del ejercicio

// - El ejercicio debe ser capaz de generar un password de la logitud que le establezcamos.
// - Los caracteres disponibles son:

// ```
//   ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/
// ```

// - En la parte de STRENGTH tenemos 4 valores posibles:

//   - TOO SHORT: Este valor aparecerá siempre que el password tenga 5 o menos caracteres.
//   - WEAK:Este valor aparecerá si el range es superior a 5 y menor de 10.
//   - MEDIUM: Este valor aparecerá si el range es superior a 10 y menor a 15.
//   - STRENGTH: Este valor aparecerá si el range es superior a 15.

// - El botón SÓLO se podrá pulsar cuando la longitud sea mayor de 5

// ## Pistas y pasos a seguir

// - Crear las 2 cajas iniciales
// - Poner los textos
// - Sincronizar el length del nuevo password con el input range
// - Conseguir que se genere un string de esa longitud al pulsar el botón y se escriba en el primer input.

// ## Principios Importantes para la creación de aplicaciones.

// - Las funciones deben tener UNA ÚNICA responsabilidad, Es mejor tener 5 funciones con 2 líneas cada una 
// que tener una sola función que se encargue de 5 tareas distintas.

const pass = document.getElementById("pass");
const length = document.getElementById("length");
const rangeInput = document.querySelector(".range-input");
const button = document.getElementById("main-button");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
// const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/";

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerChars='abcdefghijklmnopqrstuvwxyz';
const numbersChars='01234567890';
const symbolsChars='!@#$%^&*()_+-={}[]:;<>,.?/';
let newcharacters = '';


const checkOptions = ()=>{
    
    if(uppercaseInput.checked){
        newcharacters+=uppercaseChars;
    }
    if(lowercaseInput.checked){
        newcharacters+=lowerChars;
    }
    if(numbersInput.checked){
        newcharacters+=numbersChars;
    }
    if(symbolsInput.checked){
        newcharacters+=symbolsChars;
    }
    buttonDisabled(newcharacters);
    return newcharacters;
}

const buttonDisabled = (newcharacters) =>{
    if(newcharacters.length>0){
        button.disabled=false;
    }else{
        button.disabled=true;
    }
}

const setLength = (event)=>{
    length.innerHTML=event.target.value;
    passwordLength = event.target.value;
};

const generatePass = ()=>{
    let newPassword = '';
    for (let index = 0; index < passwordLength; index++) {
        const number = Math.floor(Math.random()*newcharacters.length);
        const char = newcharacters.charAt(number)
        newPassword += char;
    }
    pass.innerHTML=newPassword;
};

rangeInput.addEventListener('input', setLength);
button.addEventListener('click',generatePass);
uppercaseInput.addEventListener('change',checkOptions);
lowercaseInput.addEventListener('change',checkOptions);
numbersInput.addEventListener('change',checkOptions);
symbolsInput.addEventListener('change',checkOptions);