const {Text} = require('../lib/text.js');

describe('Text', () => {
    describe('render', () => {
        it('should return a blue SVG with the text "abc"', () => {
            const text = new Text('abc', 'blue');
            expect(text.render()).toBe('<text x="150" y="100" font-size="48" text-anchor="middle" dy=".3em" fill="blue">abc</text>');
        });
    });
});

const add = (a,b) => a + b;

describe('Add', () => {
    describe('adding', () => {
        it('should be 2', () => {
            expect(add(1,1)).toBe(2);
        });
    });
});