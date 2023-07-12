function getFreeUrinals(text) {
    const urinals = text.split('');
    let max = 0;
    for (let i = 0; i < urinals.length; i++) {
        const prev = i == 0 ? undefined : urinals[i - 1];
        const curr = urinals[i];
        const next = i == urinals.length - 1 ? undefined : urinals[i + 1];

        if ((prev == '1' && curr == '1') || (curr == '1' && next == '1')) {
            return -1
        }
        if (prev != '1' && curr != '1' && next != '1') {
            urinals.splice(i, 1, '1');
            max++
        }
    }
    console.log(urinals);
    return max
}

console.log(getFreeUrinals('1001')); //0
console.log(getFreeUrinals('10001')); //1
console.log(getFreeUrinals('00000')); //3
console.log(getFreeUrinals('01100')); //3
