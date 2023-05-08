// - - Added from display-window.js
import { resumeViewer } from "../pageSelection/resume.js";
import { projectViewer } from "../pageSelection/projects.js";
import { gamesViewer } from "../pageSelection/games/games.js";
import { contactViewer } from "../pageSelection/contact.js";
import { referenceViewer } from "../pageSelection/references.js";

const screenDisplay = document.getElementById('screenDisplay');
const displayWindow = document.createElement('div');
displayWindow.id = 'displayWindow'; // - - id located in retroScreen-on.css
displayWindow.classList = 'screen-on';


// -- Dynamic application tray that appeard when 'start' button is clicked - -
const bottomNavBar = document.createElement('nav');
bottomNavBar.classList.add('nav', 'displayOn-Animation');


// ! - ERROR: Button styles do not toggle - !
const start = document.createElement('button');
start.id = 'start';
start.innerHTML = "Start";
bottomNavBar.appendChild(start);

// - - If app tray is toggled remove app tray
start.addEventListener('click', function (event) {
    const appTray = this.querySelector('#appTray');
    if (this.classList.contains('change2')) {
        // console.log('remove');
        this.classList.remove('change2');
        if (appTray) {
            this.removeChild(appTray);
        }
    }
    // . . If app tray is not toggled create app tray
    else {
        // console.log('add');
        this.classList.add('change2');
        // -- Create App Tray
        if (!appTray) {
            const appTray = document.createElement('div');
            appTray.id = 'appTray'; // - - id located in retroScreen-on.css
            appTray.innerHTML = `
                <p class="subNav">Resume</p>
                <p class="subNav">Projects</p>
                <p class="subNav">Games</p>
                <p class="subNav">Contact Me</p>
                <p class="subNav">Site References</p>
            `
            this.appendChild(appTray);

            // . . array from subNav buttons . .
            let buttons = document.getElementsByClassName("subNav");
            // console.log(displayWindow);
            screenDisplay.appendChild(displayWindow);
            //  - - Add click event listeners to each button - -
            // . . Open fileViewers . .
            Array.from(buttons).forEach(function (button) {
                button.addEventListener('click', (event) => {
                    // console.log("funtest");
                    // - - Remove any existing content from the displayWindow - -
                    while (displayWindow.firstChild) {
                        displayWindow.removeChild(displayWindow.firstChild);
                    }
                    // . . Append the appropriate viewer to the screen display based on the button clicked . .
                    if (button.innerHTML === 'Resume') {
                        displayWindow.appendChild(resumeViewer);
                        console.log(displayWindow);
                    }
                    else if (button.innerHTML === 'Projects') {
                        // console.log('projects');
                        displayWindow.appendChild(projectViewer);
                        console.log(displayWindow);
                    }
                    else if (button.innerHTML === 'Games') {
                        // console.log("games");
                        displayWindow.appendChild(gamesViewer);
                        console.log(displayWindow);
                    }
                    else if (button.innerHTML === 'Contact Me') {
                        // console.log('contact');
                        displayWindow.appendChild(contactViewer);
                        console.log(displayWindow);
                    }
                    else if (button.innerHTML === 'Site References') {
                        // console.log('ref');
                        displayWindow.appendChild(referenceViewer);
                        console.log(displayWindow);
                    }
                });
            });
        }

    }
})

export { bottomNavBar };










