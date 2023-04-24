import { bottomNavBar } from "../screenComponents/nav.js";


// - - Monitor button toggle - -
const monitorButton = document.getElementsByClassName("material-symbols-outlined")[0];
const screenDisplay = document.getElementById('screenDisplay');

monitorButton.addEventListener('click', function(event) {
    // . . OFF . .
    if (this.classList.contains('change')) {
        this.classList.remove('change');
        screenDisplay.classList.remove('screenOn');
        screenDisplay.innerHTML = "";
    } else { // . . ON . .
        this.classList.add('change');
        screenDisplay.classList.add('screenOn');
        
        // - - File Imports: screen components - -
        
       
        screenDisplay.appendChild(bottomNavBar); // . . append bottomNavBar here . .
        
    }
});       

