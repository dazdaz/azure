```
az group create \
    --name myResourceGroup \
    --location eastus2

az storage account create \
    --resource-group myResourceGroup \
    --name mystorageaccount \
    --location eastus2 \
    --sku Standard_LRS

az batch account create \
    --name mybatchaccount \
    --storage-account mystorageaccount \
    --resource-group myResourceGroup \
    --location eastus2

az batch account login \
    --name mybatchaccount \
    --resource-group myResourceGroup \
    --shared-key-auth

az batch pool create \
    --id mypool --vm-size Standard_A1_v2 \
    --target-dedicated-nodes 2 \
    --image canonical:ubuntuserver:16.04-LTS \
    --node-agent-sku-id "batch.node.ubuntu 16.04"

az batch pool show --pool-id mypool \
    --query "allocationState"

az batch job create \
    --id myjob \
    --pool-id mypool

The following Bash script creates 4 parallel tasks (mytask1 to mytask4).

for i in {1..4}
do
   az batch task create \
    --task-id mytask$i \
    --job-id myjob \
    --command-line "/bin/bash -c 'printenv | grep AZ_BATCH; sleep 90s'"
done

az batch task show \
    --job-id myjob \
    --task-id mytask1

az batch task file list \
    --job-id myjob \
    --task-id mytask1 \
    --output table

az batch task file download \
    --job-id myjob \
    --task-id mytask1 \
    --file-path stdout.txt \
    --destination ./stdout.txt
```
