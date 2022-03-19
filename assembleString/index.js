function assembleString(array) {
    const chars = [...array];
    console.log(chars);
    sentence = chars[0];
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        for (let j = 0; j < char.length; j++) {
            const e = char[j];
            if (e == '*') {
                sentence[j] = '*';
            } else {
                sentence = sentence.substring(0, j) + e + sentence.substring(j+1)
            }
        }
    }
    console.log(sentence);
}

assembleString(["12***6789", "**3456789", "12345**8*", "***456**9", "1*3*5*7*9", "*2*456789"]);