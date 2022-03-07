var fs = require('fs');
var request = require('request');
var sleep = require('sleep')



request('https://bitnodes.earn.com/api/v1/snapshots/latest/', function (error, response, body) {
console.log(error, response,body);

  	 	if (error==null){

			data = JSON.parse(body)
			var timestamp = Date.now()
			var total_nodes = data.total_nodes;
			var latest_height = data.latest_height;
	 		var result = Object.keys(data.nodes);
	 		var path = 'Define Your Path Here';
	 		var filename = timestamp;



	 		 fs.appendFileSync(path+filename+'.csv', 'Node')
			 fs.appendFileSync(path+filename+'.csv', '\t')
	 		 fs.appendFileSync(path+filename+'.csv', 'Protocol_Version')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'User_Agent')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'Connected_Since')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'Services')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'Height')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'Hostname')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'City')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'Country_Code')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'Latitude')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'Longitude')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'Timezone')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'ASN')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'Timestamp')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'Latest_Height')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'Total_Nodes')
			 fs.appendFileSync(path+filename+'.csv', '\t')
			 fs.appendFileSync(path+filename+'.csv', 'Organization')
			 fs.appendFileSync(path+filename+'.csv', '\n')



	 		for (var counter = 0; counter < result.length; counter++){

	 				 fs.appendFileSync(path+filename+'.csv', result[counter])
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', data.nodes[result[counter]][0])
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', data.nodes[result[counter]][1])
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', data.nodes[result[counter]][2])
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', data.nodes[result[counter]][3])
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', data.nodes[result[counter]][4])
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', data.nodes[result[counter]][5])
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', data.nodes[result[counter]][6])
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', data.nodes[result[counter]][7])
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', data.nodes[result[counter]][8])
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', data.nodes[result[counter]][9])
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', data.nodes[result[counter]][10])
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', data.nodes[result[counter]][11])
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', timestamp)
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', latest_height)
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', total_nodes)
					 fs.appendFileSync(path+filename+'.csv', '\t')
					 fs.appendFileSync(path+filename+'.csv', JSON.stringify(data.nodes[result[counter]][12]))
					 fs.appendFileSync(path+filename+'.csv', '\n')

	 		}}

});


