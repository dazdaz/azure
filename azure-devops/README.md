## Using Azure DevOps from command line

```
az extension add --name azure-devops
# Create org and service connection
git clone https://github.com/Azure/azure-devops-cli-extension
.\scaffolding.ps1 -filePath .\org_details.txt
az devops ?
az pipelines create --name "Express.CI"
az pipelines runs list --pipeline 
az pipelines runs list --pipeline-id 501
# Opens pipeline in a web browser
az pipelines runs show --id 2831 --open
```

### Links
* https://github.com/Microsoft/azure-devops-cli-extension
* https://marketplace.visualstudio.com/items?itemName=ms-vsts.cli
* https://docs.microsoft.com/en-us/cli/vsts/overview?view=vsts-cli-latest
