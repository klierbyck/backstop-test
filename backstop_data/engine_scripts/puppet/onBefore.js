module.exports = async (page, scenario, vp) => {
  await require('./loadLocalStorage')(page, scenario);
  await require('./loadCookies')(page, scenario);
};
