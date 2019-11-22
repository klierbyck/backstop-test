const fs = require('fs');
// const localStorage = require('localstorage-memory');
const localstoragePonyfill = require('localstorage-ponyfill');
const localStorage = localstoragePonyfill.createLocalStorage();
console.log('global',global);
module.exports = async (page, scenario) => {
  let storge = [];
  const localStoragePath = scenario.localStoragePath;

  // READ storge FROM FILE IF EXISTS
  if (fs.existsSync(localStoragePath)) {
    storge = JSON.parse(fs.readFileSync(localStoragePath));
  }
  storge.map((local) => {
    console.log('localStorage');
    localStorage.setItem(local.name, local.value);
  })
  console.log('storge state restored with:', JSON.stringify(storge, null, 2));
};
