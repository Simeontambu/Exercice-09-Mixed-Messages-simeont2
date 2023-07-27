// Define arrays containing data

const subjects = ["You", "I", "We"];
const verbs = ["are amazing", "can do it", "will succeed"];
const objects = ["today!", "in everything you do.", "no matter what happens."];

// Function to generate a random index
const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};
// Generate a random message

const generateMessage = () => {
  const subject = subjects[getRandomIndex(subjects)];
  const verb = verbs[getRandomIndex(verbs)];
  const object = objects[getRandomIndex(objects)];

  return `${subject} ${verb} ${object}`;
};

console.log(generateMessage());
