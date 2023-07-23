const fs = require("fs/promises");

const getAll = async () => {
  const data = await fs.readFile("./books.json");
  return JSON.parse(data);
};

module.exports = {
  getAll,
};
