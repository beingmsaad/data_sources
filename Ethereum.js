var request = require('request');
var fs = require('fs');
var counter = 0;
var timeInMs = Date.now();
console.log(timeInMs)
var path = "Define Your Path Here"

fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', 'Id');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', 'host');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', 'port');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', 'clientId');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', 'client');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', 'clientVersion');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', 'os');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', 'lastUpdate');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', 'country');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\n');



function scrape (start_point){
var data = null; 
var total = null; 
request('https://ethernodes.org/data?draw=2&columns%5B0%5D%5Bdata%5D=id&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=host&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=isp&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=country&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=client&columns%5B4%5D%5Bname%5D=&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B5%5D%5Bdata%5D=clientVersion&columns%5B5%5D%5Bname%5D=&columns%5B5%5D%5Bsearchable%5D=true&columns%5B5%5D%5Borderable%5D=true&columns%5B5%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B5%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B6%5D%5Bdata%5D=os&columns%5B6%5D%5Bname%5D=&columns%5B6%5D%5Bsearchable%5D=true&columns%5B6%5D%5Borderable%5D=true&columns%5B6%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B6%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B7%5D%5Bdata%5D=lastUpdate&columns%5B7%5D%5Bname%5D=&columns%5B7%5D%5Bsearchable%5D=true&columns%5B7%5D%5Borderable%5D=true&columns%5B7%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B7%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B8%5D%5Bdata%5D=inSync&columns%5B8%5D%5Bname%5D=&columns%5B8%5D%5Bsearchable%5D=true&columns%5B8%5D%5Borderable%5D=true&columns%5B8%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B8%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=1&order%5B0%5D%5Bdir%5D=desc&start='+start_point+'&length=100&search%5Bvalue%5D=&search%5Bregex%5D=false', function (error, response, body) {
data = JSON.parse(body).data; // Print the HTML for the Google homepage.
total = JSON.parse(body).recordsTotal

for(var i = 0;  i < data.length; i++){
	id = data[i].id;
	host = data[i].host;
	port = data[i].port;
	clientId = data[i].clientId;
	client = data[i].client;
	clientVersion = data[i].clientVersion;
	os = data[i].os
	lastUpdate = data[i].lastUpdate;
	country = data[i].country

fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', id);
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', host);
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', port);
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', clientId);
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', client);
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', clientVersion);
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', os);
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', lastUpdate);
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\t');
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', country);
fs.appendFileSync(path+JSON.stringify(timeInMs)+'.csv', '\n');


}
counter = counter + data.length;
if (counter < total ) {
start_point = counter;
scrape(start_point)


}
});
}

scrape(0)

