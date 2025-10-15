# azure-aci-scaletest
This is the tool that can be used to do scale test containers on Azure Container Instance (ACI). This tool was developed to spinup any number of containers on ACI and collect the metrics of boot time of each of the container instances and give the results. The results can be used analyse how fast the CI intances are  being spinned up.

## Prerequisites for the tool to be used:
 1. Azure subscription
 2. Resource group pre created in which the ACIs will be spinned up.
 3. Azure Container Registry (ACR) already created within the subscription.
 4. A service Principal with contributor access.
 5. A Ubuntu server on which the controller service can be run.
 
 ## With the above pre-requisites get the following details:
 1. Azure subscription Id
 2. Service principal ID
 3. Service Principal Password
 4. Tenant Id
 5. ACR Server name
 6. ACR username
 7. ACR Password
 8. Azure region Name in which the resoyrce group is created
 
 ## Steps to test use this tool:
 
 ### Step 1: Prepare a Server for running the tool
  a. Spin up a Ubuntu 16.X Ubuntu VM on Azure.
  b. Login into the server and install node.js and git tools.
  c. create a folder where you would want to deploy the tool.
  d. cd to the tool and clone the git repo < git clone https://github.com/gkranga/azure-aci-scaletest.git >
  e. cd azure-aci-scaletest
  f. cd server-app
  g. npm install
  h. Install Docker
  i. install az-cli
  
 
 ### Step 2: Prepare the Container image which will be spinned up on ACI
  a. from the root folder run the command cd client-app
  b. edit the client.js file using any editor and change the value of the "hostname" key to the IP address of the public IP address of the server created in the step 1 and save the file.
  c. run the command "sudo docker build <<ACR username>>/azurecr.io/<<name of your choice of the docker image>>
  d. configure docker to on the server to point to the ACR: sudo az acr login --name <<acr username>>
  e. push the docker image using the command: sudo docker <<complaete path with image name from c above>>
 
 
 ### Step 3: Run the node.js server which controls the spin up of ACI process and gives result.
  a. cd `<root folder>`/azure-aci-scaletest/server-app/
  b. node server.js &
 
 The node.js Server supports the following APIs:
 a. `URL`/getResults : This API gives the JSON output of the timestamps of all the containers booted on ACI.
 b. `URL`/controller : This api takes JSON input as http Post data and spins up the ACI instances.
 c. `URL`/flushStore : This api flushes all the results collected. This should be called before performing the next test to spin up the ACIs.
 
 Sample command to spin up the ACIs through controller: 
 
 *curl --header "Content-Type: application/json" --request POST --data '{"acrName": `<<acrName>>.azurecr.io`, "imageName": "`name of the containerimage`, "numberOfContainers": `number of ACIs you would want to sin up`, "subscriptionId": `Azure subscription ID`, "resourceGroupName": `name of the resource group already provisioned`, "location": `Azure Region name on which the resource group is provisioned`, "acrUserName":`ACR User Name`, "acrPassword": `ACR Password`, "servicePrincipalId": `service principal ID`, "servicePrincipalSecret" : "service principal password", "tennatId" : `tenent ID`}' http://`<<IP address of the server>>`:3000/controller*
 
 
  
