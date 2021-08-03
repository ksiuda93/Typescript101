

function checkText(text: string) : string {
    if (text.substr(0, 2) === "ts") {
        return text
    }
    return "ts" + text
}

console.log(checkText("tsjavascript"));