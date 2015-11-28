var brain = require('brain');
var secondBrain = require(process.cwd() + '/assets/thirdBrainData.json');
var net = new brain.NeuralNetwork();

var trainedNetwork = function(data, cb) {
  net.fromJSON(secondBrain);

  console.log('Comparing data on third brain');

  var results = net.run(data);
  if (results) {
      cb(results);
    } else {
      console.error('No results from trained Network!');
    }

};

exports.trainedNetwork = trainedNetwork;
