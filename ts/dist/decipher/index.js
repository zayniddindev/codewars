"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decipherThis = void 0;
function decipher(str) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ______abcdefghijklmnopqrstuvxyz";
    let f = chars.charAt(parseInt(str) - 65);
    let s = String(parseInt(str)).length;
    if (str.length > 2) {
        return f + str[str.length - 1] + str.substring(s + 1, str.length - 1) + str[s];
    }
    else if (str.length == 2) {
        return f + str[s - 1];
    }
}
function decipherThis(str) {
    return str.split(" ").map(s => decipher(s)).join(" ");
}
exports.decipherThis = decipherThis;
console.log(decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"));
