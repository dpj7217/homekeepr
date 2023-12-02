interface singleColor {
    bg: string,
    text: string,
    checkbox: string,
    checkboxBorder: string,
    shadeDarker: string,
}

class colors {
    // reference here https://colorhunt.co/palette/2f8f9d3bacb682dbd8b3e8e5
    static blueish: singleColor = {
        bg: "#B3E8E5",
        text: "black",
        checkbox: "#2F8F9D",
        checkboxBorder: "black",
        shadeDarker: "#82DBD8",
    };
    // reference here https://colorhunt.co/palette/ffb3b3ffdba4ffe9aec1efff
    static yellowish: singleColor = {
        bg: "#FFEBCC",
        text: "black",
        checkbox: "#C1EFFF",
        checkboxBorder: "#000000",
        shadeDarker: "#FFDBA4",
    };
    // reference here https://colorhunt.co/palette/ac4425224b0cc1d5a4f0f2b6
    static greenish: singleColor = {
        bg: "#F0F2B6",
        text: "black",
        checkbox: "#224B0C",
        checkboxBorder: "white",
        shadeDarker: "#C1D5A4",
    };
    // reference here https://colorhunt.co/palette/ffe8dffffffff0f0f0888888
    static light: singleColor = {
        bg: "#FFFFFF",
        text: "black",
        checkbox: "#888888",
        checkboxBorder: "white",
        shadeDarker: "#F0F0F0",
    }
}

export {singleColor, colors}