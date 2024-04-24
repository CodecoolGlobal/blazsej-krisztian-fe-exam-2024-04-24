// Task: groupArrayByParity
// Write a function groupArrayByParity(arr) that takes an array of numbers
// and returns an object with two properties:
//
// even: an array of all even numbers from arr.
// odd: an array of all odd numbers from arr.
// If the input is not an array, the function should throw an error with message: "Input must be an array"
export function groupArrayByParity(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  const numbers = arr;
  const result = { even: [], odd: [] };

  for (const num of numbers) {
    if (Number.isInteger(num)) {
      if (num % 2 === 0) {
        result.even.push(num);
      } else {
        result.odd.push(num);
      }
    } else {
      throw new Error("All elements must be numbers");
    }
  }

  return result;
}

//Task: averageWordCount
//Write a function averageWordCount(sentences, minLength) that takes an array of strings sentences and an integer minLength.
//The function should return the average number of words (with a length greater than minLength) for each sentence.
//If sentences is empty, the function should return 0.
export function averageWordCount(sentences, minLength) {
  if (sentences.length === 0) {
    return 0;
  }

  let totalWords = 0;
  let validSentences = 0;

  for (const sentence of sentences) {
    const words = sentence.split(" ");
    let wordCount = 0;

    for (const word of words) {
      if (word.length > minLength) {
        wordCount++;
      }
    }

    if (wordCount > 0) {
      totalWords += wordCount;
      validSentences++;
    }
  }

  if (validSentences === 0) {
    return 0;
  }

  return totalWords / validSentences;
}
// Task: findHighestScore
// Write a function findHighestScore(students, subject)
// that takes an array of objects students and a string subject.
// Each object in the students array contains the name of a student
// and their scores in different subjects. The function should
// return the name of the student with the highest score in the specified subject.
//
// If no student has a score for the specified subject,
// or if students is empty, the function should return null.
// If the students array contains elements that aren't objects
// or if subject isn't a string, the function should throw an error.
//
// Examples:
// findHighestScore([ { name: 'Alice', math: 90, science: 85 }, { name: 'Bob', math: 95, science: 80 } ], 'math') should return 'Bob'.
// findHighestScore([ { name: 'Alice', math: 90 }, { name: 'Bob', science: 95 } ], 'math') should return 'Alice'.
// findHighestScore([ { name: 'Alice', math: 90 }, { name: 'Bob', science: 95 } ], 'history') should return null.
export function findHighestScore(students, subject) {
  let highestScore = 0;
  let highestStudent = null;

  for (const student of students) {
    if (student[subject] > highestScore) {
      highestScore = student[subject];
      highestStudent = student.name;
    } else {
      return highestStudent;
    }
  }
  return highestStudent;
}
