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
        { text: 'Google', url: 'https://www.google.com' },
        { text: 'Mozilla', url: 'https://www.mozilla.org' },
        { text: 'GitHub', url: 'https://www.github.com' },
        // Add more links as needed
    ];

    // Iterate over the links array to create anchor elements
    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;  // Set the href attribute
        a.textContent = link.text;  // Set the text of the link
        a.target = '_blank';  // Make the link open in a new tab (optional)
        a.className = 'link-item';  // Add a class for styling
        linksContainer.appendChild(a);  // Append the anchor to the links container
        linksContainer.appendChild(document.createElement('br'));  // Add a line break between links
    });

    // Append the links container to the main container
    mainContainer.appendChild(linksContainer);
});
