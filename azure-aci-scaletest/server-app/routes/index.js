

let contCounter = 0
let store = new Object ()
//let containerObject = new Object ()
var containers = []
var credObjectArray = []
const maxNumberOsContainersPerGroup = 64
var numberOfContainerWithinGroup = 0     
var cGroupName = "cgroup"
const maxNumberOfGroups = 20

module.exports = {
  getResults(req, res) {
  	console.log (store)
    res.status(200).send(store)
  },
  flushStore(req, res) {
    req.length = 0
    res.status(201).send(req.store)
  },
  addTimestamp(req, res) {
  	console.log (req.body)
    store[++contCounter] = req.body.timestamp
    console.log (store)
    res.status(200).send("Done")  
  },
  controller(req, res){
    const t = new Date
    const postData = JSON.stringify ({ControllerUtcTimestamp: t.getUTCHours() + ":" + t.getUTCMinutes() + ":" + t.getUTCSeconds()})
    console.log(postData);
    
    for (var j = 0; j < (Math.ceil(req.body.numberOfContainers/maxNumberOsContainersPerGroup)) ; j++) {
      if(j === (Math.ceil(req.body.numberOfContainers/maxNumberOsContainersPerGroup)-1) && !Number.isInteger(req.body.numberOfContainers/maxNumberOsContainersPerGroup)){
        numberOfContainerWithinGroup = req.body.numberOfContainers % maxNumberOsContainersPerGroup
      }  
      else {
       numberOfContainerWithinGroup = maxNumberOsContainersPerGroup
      } 
      //console.log("numberOfContainerWithinGroup =" + numberOfContainerWithinGroup)
      containers = []
      for (var  i = 0; i < numberOfContainerWithinGroup; i++) {
        var containerObject = {
                    "name": "",
                    "properties": {
                                    "command": [],
                                    "environmentVariables": [],
                                    "image": "",
                                    "ports": [],
                                    "resources": {
                                      "requests": {}
                                    }
                                    }
                            }
        containerObject.properties.resources.requests = {
                          "cpu": 1,
                          "memoryInGB": 1
                        }
    
      if (i === 0){ 
        containerObject.properties.ports.push({"port": 80})
      }
      containerObject.name = "demo" + (i+1)    
      containerObject.properties.image = req.body.acrName + "/" + req.body.imageName
      containers.push(containerObject)    
      }  
    var options = generateContainerJson(req, cGroupName + (i+1), numberOfContainerWithinGroup)
    provisionAci(req, options)   
    }      

    
    res.status(200).send("Done")
  }
}

function generateContainerJson(req, containerGroupName, containernumber){
  let options = {
    method: 'PUT',
    url: "https://management.azure.com/subscriptions/" + req.body.subscriptionId + "/resourceGroups/" + req.body.resourceGroupName + "/providers/Microsoft.ContainerInstance/containerGroups/" + containerGroupName +"?api-version=2018-04-01",
    headers: {
      'user-agent': 'MyTestApp/1.0'
    },
    body: 
      {
      "id": "/subscriptions/" + req.body.subscriptionId + "/resourceGroups/" + req.body.resourceGroupName + "/providers/Microsoft.ContainerInstance/containerGroups/" + containerGroupName,
      "location": req.body.location,
      "name": containerGroupName,
      "properties": {
        "containers": [],
        "imageRegistryCredentials": [
                        {
                          "password": "",
                          "username": "",
                          "server": ""
                        }                         
                      ],
        "ipAddress": {
                "ports": [
              {
                "protocol": "TCP",
                "port": 80
              }
            ],
          "type": "Public",
          "dnsNameLabel": "dnsnamelabel1"
        },
        "osType": "Linux",
        "restartPolicy": "Never",
        "volumes": [
        ]
      },
      "type": "Microsoft.ContainerInstance/containerGroups"
    }
  }
  options.body.properties.containers = containers
  options.body.name = containerGroupName
  options.body.properties.imageRegistryCredentials[0].server = req.body.acrName
  options.body.properties.imageRegistryCredentials[0].username = req.body.acrUserName
  options.body.properties.imageRegistryCredentials[0].password = req.body.acrPassword
  
  console.log(JSON.stringify(options, null, 4))
  return (options)
}

function provisionAci(req, options) {

const msrest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const AzureServiceClient = msRestAzure.AzureServiceClient;
const ComputeManagementClient = require('azure-arm-compute');
const NetworkManagementClient = require('azure-arm-network');

var client;

msRestAzure.loginWithServicePrincipalSecret(req.body.servicePrincipalId, req.body.servicePrincipalSecret, req.body.tennatId).then((creds) => {
  client = new AzureServiceClient(creds);
  return client.sendRequest(options);
}).then((result) => {
  console.dir(result, {depth: null, colors: true});
}).catch((err) => {
  console.dir(err, {depth: null, colors: true});
});

}

