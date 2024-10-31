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
const range = document.getElementById("range");
const button = document.getElementById("main-button");


button.addEventListener("click", () => {
    const rangeValue = rangeInput.value;
    const lengthValue = length.value;
    generatePassword(rangeValue, lengthValue);
})

function generatePassword(rangeValue, lengthValue) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/";
    let password = "";  
    for (let i = 0; i < rangeValue; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    pass.innerHTML = password;  
    length.innerHTML = rangeValue;

}


