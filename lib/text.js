class Text {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `<text x="150" y="100" font-size="48" text-anchor="middle" dy=".3em" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = {
    Text,
};