class Automaton {
  constructor() {
    this.states = [];
  }
  readCommands(commands) {
    if (commands.length == 1) return true;
    let curr = "q1";
    for (let i = 0; i < commands.length; i++) {
      const move = commands[i];
      switch (move) {
        case "1": curr == "q1" ? (curr = "q2") : (curr = "q2");
          break;
        default: curr == "q1" ? (curr = "q1") : curr == "q2" ? (curr = "q3") : (curr = "q2");
          break;
      }
    }
    return curr === "q2";
  }
}
var myAutomaton = new Automaton();
console.log(myAutomaton.readCommands(["1", "0"]));

/**
 * input: ["1", "0", "0", "1", "0"]

 * 1: q1 -> q2
 * 0: q2 -> q3
 * 0: q3 -> q2
 * 1: q2 -> q2
 */
