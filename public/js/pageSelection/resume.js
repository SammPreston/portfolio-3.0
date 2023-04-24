// - - Create Base FileViewer - -
const resumeViewer = document.createElement('div');
resumeViewer.className = 'fileViewer';


// . . header element is created in each fileViewer but is styled with the same classes . .
const header = document.createElement('div');
header.className='fileViewerHeader';
header.innerHTML= `<h3>Resume</h3>`
resumeViewer.appendChild(header);

// . . nav element is created in each fileViewer by is styled with the same class . .
const nav = document.createElement('div');
nav.className='fileViewerNav';
resumeViewer.appendChild(nav);
// - - nav links
nav.innerHTML = `
    <button class='game'>Work Experience</button>
`

// - - Show contents - -
const resumeViewPanel = document.createElement('div');
resumeViewPanel.className='contentViewer';
resumeViewer.appendChild(resumeViewPanel);


export { resumeViewer };