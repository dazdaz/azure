# ACR Build job is persistent and will monitor for updates in the GitHub repo.
# You don't need to configure a Webhook for ACR build functionality.

# https://docs.microsoft.com/en-us/azure/container-registry/container-registry-tutorial-build-task

# Create PAT (Personal Access Token) : https://github.com/settings/tokens.
# repo
# - repo:status
# - public_repo

GIT_PAT=1234567890
ACR_NAME=myregistry              # The name of your Azure container registry
GIT_USER=dazzler                 # Your GitHub user account name

# Configure the build
az acr build-task create \
    --registry $ACR_NAME \
    --name buildhelloworld \
    --image helloworld:{{.Build.ID}} \
    --image helloworld:latest \
    --context https://github.com/$GIT_USER/acr-build-helloworld-node \
    --branch master \
    --git-access-token $GIT_PAT

# Execute the build run
az acr build-task run --registry $ACR_NAME --name buildhelloworld

# View trigger Git commit / manual
# View container build status
az acr build-task logs --registry $ACR_NAME
az acr build-task list-builds --registry $ACR_NAME --output table

# Show pre-configured build tasks
az acr build-task list --registry $ACR_NAME --resource-group $ACR_RG
