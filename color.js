// script.js
const colors = {
    'Red': '#FF0000', 'Green': '#008000', 'Blue': '#0000FF', 'Yellow': '#FFFF00',
    'Purple': '#800080', 'Orange': '#FFA500', 'Pink': '#FFC0CB', 'Black': '#000000',
    'White': '#FFFFFF', 'Brown': '#A52A2A', 'Light Blue': '#ADD8E6', 'Light Green': '#90EE90',
    'Dark Blue': '#00008B', 'Dark Green': '#006400', 'Dark Red': '#8B0000', 'Cyan': '#00FFFF',
    'Magenta': '#FF00FF', 'Gold': '#FFD700', 'Silver': '#C0C0C0', 'Gray': '#808080',
    'Teal': '#008080', 'Navy': '#000080', 'Lavender': '#E6E6FA', 'Coral': '#FF7F50',
    'Salmon': '#FA8072', 'Lime': '#00FF00', 'Olive': '#808000', 'Khaki': '#F0E68C',
    'Plum': '#DDA0DD', 'Indigo': '#4B0082', 'Violet': '#EE82EE', 'Chocolate': '#D2691E',
    'Sandy Brown': '#F4A460', 'Peach': '#FFDAB9', 'Tan': '#D2B48C', 'Mint Green': '#98FF98',
    'Lemon Chiffon': '#FFFACD', 'Honeydew': '#F0FFF0', 'Wheat': '#F5DEB3', 'Crimson': '#DC143C',
    'Firebrick': '#B22222', 'Sky Blue': '#87CEEB', 'Steel Blue': '#4682B4', 'Slate Gray': '#708090',
    'Periwinkle': '#CCCCFF', 'Orchid': '#DA70D6', 'Misty Rose': '#FFE4E1', 'Rosy Brown': '#BC8F8F',
    'Medium Violet Red': '#C71585', 'Light Coral': '#F08080', 'Medium Sea Green': '#3CB371',
    'Pale Green': '#98FB98', 'Dark Golden Rod': '#B8860B', 'Medium Orchid': '#BA55D3',
    'Dark Khaki': '#BDB76B', 'Light Sea Green': '#20B2AA', 'Cadet Blue': '#5F9EA0',
    'Dark Slate Blue': '#483D8B', 'Pale Violet Red': '#DB7093', 'Light Steel Blue': '#B0C4DE',
    'Slate Blue': '#6A5ACD', 'Light Slate Gray': '#778899', 'Antique White': '#FAEBD7',
    'Medium Turquoise': '#48D1CC', 'Light Golden Rod Yellow': '#FAFAD2', 'Dark Orchid': '#9932CC',
    'Cornflower Blue': '#6495ED', 'Dark Salmon': '#E9967A', 'Light Salmon': '#FFA07A',
    'Dark Olive Green': '#556B2F', 'Thistle': '#D8BFD8', 'Light Pink': '#FFB6C1',
    'Dark Sea Green': '#8FBC8F', 'Burlywood': '#DEB887', 'Medium Spring Green': '#00FA9A',
    'Deep Pink': '#FF1493', 'Fuchsia': '#FF00FF', 'Medium Blue': '#0000CD',
    'Indian Red': '#CD5C5C', 'Sea Green': '#2E8B57', 'Dim Gray': '#696969',
    'Papaya Whip': '#FFEFD5', 'Light Yellow': '#FFFFE0', 'Dark Slate Gray': '#2F4F4F',
    'Medium Slate Blue': '#7B68EE', 'Dark Turquoise': '#00CED1', 'Lawn Green': '#7CFC00',
    'Chartreuse': '#7FFF00', 'Light Cyan': '#E0FFFF', 'Snow': '#FFFAFA',
    'Seashell': '#FFF5EE', 'Lavender Blush': '#FFF0F5', 'Pale Golden Rod': '#EEE8AA',
    'Light Blue': '#ADD8E6', 'Medium Purple': '#9370DB', 'Royal Blue': '#4169E1',
    'Hot Pink': '#FF69B4', 'Coral Pink': '#FF6F61', 'Mint Cream': '#F5FFFA',
    'Azure': '#F0FFFF', 'Light Orchid': '#E6A8D7', 'Dark Blue Violet': '#9400D3',
    'Cyan': '#00FFFF', 'Light Steel Blue': '#B0C4DE', 'Dark Magenta': '#8B008B',
    'Moccasin': '#FFE4B5', 'Medium Violet Red': '#C71585', 'Beige': '#F5F5DC',
    'Light Gray': '#D3D3D3', 'Dark Orange': '#FF8C00', 'Pale Turquoise': '#AFEEEE',
    'Golden Rod': '#DAA520', 'Dark Olive Green': '#556B2F', 'Light Sea Green': '#20B2AA',
    'Dark Slate Blue': '#483D8B', 'Forest Green': '#228B22', 'Wheat': '#F5DEB3',
    'Dark Salmon': '#E9967A', 'Medium Orchid': '#BA55D3', 'Dark Sea Green': '#8FBC8F',
    'Salmon': '#FA8072', 'Light Golden Rod': '#FAFAD2', 'Slate Gray': '#708090',
    'Rosy Brown': '#BC8F8F', 'Navajo White': '#FFDEAD', 'Honeydew': '#F0FFF0',
    'Light Coral': '#F08080', 'Royal Blue': '#4169E1', 'Coral Red': '#FF4040',
    'Pale Violet Red': '#DB7093', 'Light Gray': '#D3D3D3', 'Sea Shell': '#FFF5EE',
    'Spring Green': '#00FF7F', 'Gainsboro': '#DCDCDC', 'Dim Gray': '#696969',
    'Violet Red': '#D02090', 'Dark Orchid': '#9932CC', 'Light Yellow': '#FFFFE0',
    'Chartreuse': '#7FFF00', 'Khaki': '#F0E68C', 'Dark Turquoise': '#00CED1',
    'Saddle Brown': '#8B4513', 'Tan': '#D2B48C', 'Papaya Whip': '#FFEFD5',
    'Peach Puff': '#FFDAB9', 'Indian Red': '#CD5C5C', 'Dark Cyan': '#008B8B',
    'Medium Spring Green': '#00FA9A', 'Floral White': '#FFFAF0', 'Light Sky Blue': '#87CEFA',
    'Linen': '#FAF0E6', 'Mint Cream': '#F5FFFA', 'Steel Blue': '#4682B4',
    'Dark Slate Gray': '#2F4F4F', 'Cornflower Blue': '#6495ED', 'Sienna': '#A0522D',
    'Slate Blue': '#6A5ACD',
};

function displayColor() {
    const colorNames = Object.keys(colors);
    const randomColorName = colorNames[Math.floor(Math.random() * colorNames.length)];
    const randomColorHex = colors[randomColorName];

    // Update the page content
    document.getElementById('color-display').textContent = `${randomColorName}`;
    document.getElementById('color-box').style.backgroundColor = randomColorHex; // Set box color to the selected color
}


