module.exports = function addEasterEggLoader(source) {
  const message = 
  String.raw`<!--\n` +
  String.raw` 👩‍🎓 👩‍💻  \n` +
  String.raw`--> \n`;

  return source.replace('<body>', `<body>${message}`)
};
