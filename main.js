const { performCalculation } = require('./src/languageInterpreter');

const main = function(cmdLineArgs) {
  const result = performCalculation(...cmdLineArgs);
  console.log(result);
};

main(process.argv.slice(2));
