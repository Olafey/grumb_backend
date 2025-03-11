const addTest = () => {
  console.log("adding....");
};

const getTest = () => {
  console.log("getting....");
};

const deleteTest = () => {
  console.log("adding....");
};

//named export: always in braces
module.exports = {
  getTest,
  deleteTest,
};

//default export
module.exports = getTest;
