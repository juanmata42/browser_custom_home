document.addEventListener("DOMContentLoaded", function () {
    // Define the colors and their corresponding CSS variable names
    const colors = {
        // 'bg-dim': '#293136',
        'bg0': '#333C43',
        'bg1': '#3A464C',
        'bg2': '#434F55',
        'bg3': '#4D5960',
        'bg4': '#555F66',
        'bg5': '#5D6B66',
        'bg-red': '#5C3F4F',
        'bg-visual': '#59464C',
        'bg-yellow': '#55544A',
        'bg-green': '#48584E',
        'bg-blue': '#3F5865',
        'red': '#E67E80',
        'orange': '#E69875',
        'yellow': '#DBBC7F',
        'green': '#A7C080',
        'blue': '#7FBBB3',
        'aqua': '#83C092',
        'purple': '#D699B6',
        'statusline1': '#A7C080',
        'statusline2': '#D3C6AA',
        'statusline3': '#E67E80',
        'gray0': '#7A8478',
        'gray1': '#859289',
        'gray2': '#9DA9A0',
        'fg': '#D3C6AA'
    };

    // Select the container where the divs will be added
    const container = document.getElementById('color-box__container');

    // Iterate over the colors object to create divs for each color
    for (const color in colors) {
        // Create a new div element
        const colorBox = document.createElement('div');

        // Add classes to the div
        colorBox.className = `color-box ${color}`;

        // Set the ID to the color name
        colorBox.id = color;

        // Set the background color using the CSS variable
        colorBox.style.backgroundColor = `var(--${color})`;

        // Optional: Add text inside the div to display the color name or code
        //colorBox.textContent = `${color}: ${colors[color]}`;

        // Append the new div to the container
        container.appendChild(colorBox);
    }
    const images = [
        'pics/1.jpg',
        'pics/2.jpg',
        'pics/3.jpg',
        // Add more images here
    ];
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * images.length);

    // Get the randomly selected image path
    const randomImagePath = images[randomIndex];

    // Create an img element
    const img = document.createElement('img');
    img.src = randomImagePath;  // Set the image source to the randomly selected image
    img.className = 'aside-picture';  // Set the class for styling

    // Get the container div by its ID
    const mainContainer = document.getElementById('main-container');

    // Clear previous images (if any) before appending the new one
    mainContainer.innerHTML = '';

    // Append the new img element to the container
    mainContainer.appendChild(img);

    // Create a new div for the links
    const linksContainer = document.createElement('div');
    linksContainer.className = 'links-container';  // Set a class for styling if needed

    // Array of links
    const links = [
        { "text": "Calendar", "url": "https://calendar.google.com/calendar/u/0/r", "iconUrl": "icons/calendar.png" },
        { "text": "ChatGPT", "url": "https://chatgpt.com/", "iconUrl": "icons/chatgpt.png" },
        { "text": "Confluence", "url": "https://dcycle.atlassian.net/wiki/spaces/DD/overview?homepageId=590031", "iconUrl": "icons/confluence.png" },
        { "text": "Dcycle", "url": "https://app.dcycle.io/", "iconUrl": "icons/dcycle.png" },
        { "text": "Dcycle Dev", "url": "https://dev-app.dcycle.io/", "iconUrl": "icons/dcycleDev.png" },
        { "text": "Google Drive", "url": "https://drive.google.com/drive/shared-with-me", "iconUrl": "icons/drive.png" },
        { "text": "Factorial", "url": "https://app.factorialhr.com/dashboard", "iconUrl": "icons/factorial.png" },
        { "text": "Figma", "url": "https://www.figma.com/design/1nlmjomse1Tzj4PTVwWvpD/%F0%9F%8F%84%E2%80%8D%E2%99%80%EF%B8%8F%5BSAAS%5DDcycle_08_GROWTH", "iconUrl": "icons/figma.png" },
        { "text": "GitHub", "url": "https://github.com/Dcycle-by-WUM", "iconUrl": "icons/github.png" },
        { "text": "Gmail", "url": "https://mail.google.com/mail/u/0/#inbox", "iconUrl": "icons/gmail.png" },
        { "text": "Jira", "url": "https://dcycle.atlassian.net/jira/software/projects/DCYC/boards/1", "iconUrl": "icons/jira.png" },
        { "text": "Google Keep", "url": "https://keep.google.com/#home", "iconUrl": "icons/keep.png" },
        { "text": "Miro", "url": "https://miro.com/app/board/uXjVLbGE2h4=/", "iconUrl": "icons/miro.png" },
        { "text": "Notion", "url": "https://www.notion.so/dcycle/Dcycle-s-Playbook-a0bc2b2d85e94fc59672b58e542af972", "iconUrl": "icons/notion.png" },
        { "text": "AWS", "url": "https://signin.aws.amazon.com/switchrole?roleName=OrganizationAccountAccessRole&account=763901840913&displayName=Dcycle-dev", "iconUrl": "icons/aws.png" },
    ]


    // Iterate over the links array to create anchor elements
    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;  // Set the href attribute
        a.target = '_self';  // Make the link open in same tab
        a.className = 'link-item';  // Add a class for styling

        const img = document.createElement('img');  // Create an img element
        img.src = link.iconUrl;  // Set the src attribute to the icon URL
        img.className = 'icon';  // Add a class for the icon
        a.appendChild(img);  // Append the image to the anchor

        const p = document.createElement('p');  // Create a paragraph element
        p.textContent = link.text;  // Set the text of the link
        p.className = 'link-text';  // Add a class for the text
        a.appendChild(p);  // Append the paragraph to the anchor

        linksContainer.appendChild(a);  // Append the anchor to the links container
        linksContainer.appendChild(document.createElement('br'));  // Add a line break between links
    });


    // Append the links container to the main container
    mainContainer.appendChild(linksContainer);
});
