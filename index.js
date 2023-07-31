const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle} = require('./lib/shapes.js');
const {Text} = require('./lib/text.js');
const {SVG} = require('./lib/svg.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: input => input.length <= 3 ? true : 'Text must be three characters or less.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal number):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal number):',
    },
];

inquirer.prompt(questions).then((answers) => {
    // Deconstruct the answers object
    const {text, textColor, shape, shapeColor} = answers;

    let svgShape = null;

    switch (shape) {
        case 'circle':
            svgShape = new Circle();
            break;
        case 'triangle':
            svgShape = new Triangle();
            break;
        case 'square':
            svgShape = new Square();
            break;
        default:
            console.log('No shape selected.');
    }
    
    svgShape.setColor(shapeColor);

    const svgText = new Text(text, textColor);

    const svg = new SVG(svgText, svgShape);

    fs.writeFileSync('logo.svg', svg.render());
});