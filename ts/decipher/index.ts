function decipher(str: string) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ______abcdefghijklmnopqrstuvxyz";
    let f = chars.charAt(parseInt(str) - 65);
    let s = String(parseInt(str)).length;
  if(str.length > 2) {
    return f + str[str.length - 1] + str.substring(s+1, str.length - 1) + str[s];
  }else if(str.length == 2) {
    return f + str[s-1]
  }
}

export function decipherThis(str: string): string {
    return str.split(" ").map(s => decipher(s)).join(" ")
}

console.log(decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"));

