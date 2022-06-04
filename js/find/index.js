function find(needle, haystack) {
    if (haystack.includes(needle)) {
      return haystack.indexOf(needle);
    } else if (needle.includes("_")) {
      for (let i = 0; i < needle.length; i++) {
        if (needle[i] == "_") {
          needle = needle.slice(i, 1) + needle.slice(i+1);
          i--
        }
      }
      console.log(needle);
    }
  }
  
  console.log(
    find(
      "___night",
      "Once upon a midnight dreary, while I pondered, weak and weary"
    )
  );
