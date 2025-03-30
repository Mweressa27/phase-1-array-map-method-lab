const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const exceptions = new Set(["OO", "NaN", "API", "JSONP"]);

  const capitalizeSpecialTerms = (word) => {
        if (word === "stopPropagation") {
      return "StopPropagation";
    }
    if (word === "preventDefault") {
      return "PreventDefault";
    }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  return tutorials.map(title => {
    return title
      .split(' ') 
      .map(word => {
        if (exceptions.has(word)) {
          return word;
        }
        return capitalizeSpecialTerms(word);
      })
      .join(' '); 
  });
};

console.log(titleCased());
