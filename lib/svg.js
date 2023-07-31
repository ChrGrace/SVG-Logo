class SVG {
    constructor(text, shape){
        this.text = text;
        this.shape = shape;
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}${this.text.render()}</svg>`;
    }
}

module.exports = {
    SVG,
};