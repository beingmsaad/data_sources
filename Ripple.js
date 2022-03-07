var request = require('request');
var fs = require('fs')
var path = "Define Your Path Here"
//Get Network Topology
request('https://data.ripple.com/v2/network/topology?verbose=true', function (error, response, body) {
fs.writeFileSync(path+'/Ripple/Topology/'+JSON.stringify(Date.now())+'.txt',body)
});

// Get Validators
request('https://data.ripple.com/v2/network/validators?format=json', function (error, response, body) {
fs.writeFileSync(path+'/Ripple/Validators/'+JSON.stringify(Date.now())+'.txt',body)
});


// Get Gateways
request('https://data.ripple.com/v2/gateways', function (error, response, body) {
fs.writeFileSync(path+'/Ripple/Gateways/'+JSON.stringify(Date.now())+'.txt',body)
});


