const students = [
    {
      studentName: "Tan",
      score: 7,
      priority: 2
    },
    {
      studentName: "Son",
      score: 5,
      priority: 1
    },
    {
      studentName: "Truong",
      score: 8,
      priority: 2
    },
    {
      studentName: "Luong",
      score: 7,
      priority: 2
    },
    {
      studentName: "Ha",
      score: 6,
      priority: 3
    },
    {
      studentName: "Dung",
      score: 9,
      priority: 2
    },
    {
      studentName: "Minh",
      score: 7,
      priority: 1
    },
    {
      studentName: "Dieu",
      score: 8,
      priority: 3
    }
  ];

  
  function findTopTwoStudents(students) {
    const sortedStudents = students.slice().sort(function compareStudents(a, b) {
        if (a.score !== b.score) {
          return b.score - a.score;
        } else {
          return a.priority - b.priority;
        }
      });
    const firstPrize = sortedStudents[0];
    const secondPrize =  sortedStudents[1];
    return {firstPrize,secondPrize};
  }
  const { firstPrize, secondPrize } = findTopTwoStudents(students);

console.log(`First prize: ${firstPrize.studentName} - Score: ${firstPrize.score}`);
console.log(`Second prize: ${secondPrize.studentName} - Score: ${secondPrize.score}`);



console.log("/////////////////////////////////////////////////////////////////////////////");

function isValid(s) {
    const stack = [];
    const openingBrackets = '({[';
    const closingBrackets = ')}]';
  
    for (let i = 0; i < s.length; i++) {
      const currentBracket = s[i];
  
      if (openingBrackets.includes(currentBracket)) {
        stack.push(currentBracket);
      } else if (closingBrackets.includes(currentBracket)) {
        const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(currentBracket)];
  
        if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

  console.log(isValid("()[]{}"));
  
