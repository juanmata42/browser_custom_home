Custom Browser Home
Here’s a README that explains the objective of the project, along with detailed instructions on customizing and setting it up as a custom new tab page.

---

# Custom Browser Home 🌈

> A minimalistic, customizable new tab page to organize your links and add a touch of personalization to your browsing experience.

This project lets you set up a clean and distraction-free browser homepage that displays:
- A set of color squares from a pre-defined palette
- A randomly chosen image of your choice
- A collection of links with their icons, all styled for a minimalist look

---

## 🚀 Demo

Check out the homepage in action here: [Demo Link (if applicable)](link).

---

## 🌟 Features

- **Minimalistic Design:** A simple interface to keep your homepage clean and distraction-free.
- **Customizable Colors:** Choose and display colors for visual appeal or theme matching.
- **Random Image:** Display a randomly chosen image each time you open a new tab.
- **Custom Links with Icons:** Add quick-access links with icons for easy navigation.

---

## 📖 Getting Started

### Installation

1. **Clone the repository** to your local machine:
    ```bash
    git clone https://github.com/username/repo-name.git
    cd repo-name
    ```

2. **Set up the project** as your new tab page:
   - Save the `index.html`, `styles.css`, `scripts.js`, and all other folders in a directory.
   - Open your browser settings and set the `index.html` file as the new tab page in your browser.

---

## 📂 Project Structure

```plaintext
repo-name/
├── font/                  # Custom fonts
├── icons/                 # Link icons (e.g., Gmail, GitHub)
├── pics/                  # Background images
├── index.html             # Main HTML file
├── scripts.js             # JavaScript for dynamic rendering
├── styles.css             # Styles for the homepage
└── tab_icon.svg           # Custom favicon for the new tab
```

---

## 🛠️ Customization Guide

You can easily customize this homepage to match your style. Below are step-by-step instructions for common customizations:

### 1. Change the Color Palette
- Open `scripts.js` and look for the `colors` object.
- Modify any of the color hex codes to your preferred colors. For example:
    ```javascript
    const colors = {
        'bg0': '#YOUR_COLOR_CODE',
        // ...
    };
    ```
- Save your changes, and refresh the page to see the new colors.

### 2. Add or Change Links and Icons
- To add or modify links, edit the `links` array in `scripts.js`.
- Each link should have `text`, `url`, and `iconUrl` properties. For example:
    ```javascript
    const links = [
        { "text": "My Link", "url": "https://example.com", "iconUrl": "icons/my_icon.png" }
    ];
    ```
- Place the icon image in the `icons` folder and reference it by name.

### 3. Add Background Images
- Place your preferred background images in the `pics` folder.
- Add the image filenames to the `images` array in `scripts.js`:
    ```javascript
    const images = [
        'pics/1.jpg',
        'pics/2.jpg',
        // Add your image files here
    ];
    ```
- Save your changes, and refresh the page to display a random image on each load.

### 4. Change the Font
- Download a new font from [Google Fonts](https://fonts.google.com/) or similar.
- Place the `.ttf` file in the `font` folder.
- Update the `@font-face` section in `styles.css`:
    ```css
    @font-face {
        font-family: 'your-font-name';
        src: URL('./font/YourFontFile.ttf') format('truetype');
    }
    ```
- Change `font-family` in `body` style to your new font:
    ```css
    font-family: 'your-font-name', sans-serif;
    ```

### 5. Customize the Page Title and Tab Icon
- To change the page title, open `index.html` and modify the `<title>` tag:
    ```html
    <title>My Custom Home</title>
    ```
- To change the tab icon (favicon), replace `tab_icon.svg` with your icon and keep the same file name, or change the link in `index.html`:
    ```html
    <link rel="icon" type="image/svg" href="path/to/your_icon.svg">
    ```

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to let me know if you have any more custom requirements or additional information you'd like added!