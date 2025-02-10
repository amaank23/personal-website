export const splitText = (element, type) => {
  if (!element) return null;

  const text = element.textContent;
  element.textContent = "";

  let splits = [];

  if (type === "chars") {
    splits = text.split("").map((char) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.textContent = char === " " ? "\u00A0" : char;
      element.appendChild(span);
      return span;
    });
  } else if (type === "words") {
    splits = text.split(" ").map((word) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.textContent = word;
      element.appendChild(span);
      const space = document.createTextNode(" ");
      element.appendChild(space);
      return span;
    });
  } else if (type === "lines") {
    const words = text.split(" ").map((word) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.textContent = word + " ";
      element.appendChild(span);
      return span;
    });

    // Group words into lines
    let currentLine = [];
    let top = words[0]?.offsetTop;

    words.forEach((word) => {
      if (word.offsetTop === top) {
        currentLine.push(word);
      } else {
        splits.push(currentLine);
        currentLine = [word];
        top = word.offsetTop;
      }
    });
    if (currentLine.length) splits.push(currentLine);
  }

  return splits;
};
