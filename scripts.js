document.addEventListener("DOMContentLoaded", function () {
    // Define the colors and their corresponding CSS variable names
    const colors = {
        'bg-dim': '#293136',
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
        colorBox.textContent = `${color}: ${colors[color]}`;

        // Append the new div to the container
        container.appendChild(colorBox);
    }
});
