### Deploy draft - If MacOSX
```
brew install draft
```

### Deploy draft - If Linux
```
wget https://azuredraft.blob.core.windows.net/draft/draft-v0.16.0-linux-amd64.tar.gz
tar xvzf draft-v0.16.0-linux-amd64.tar.gz
cd linux-amd64/
sudo cp draft  /usr/local/bin
draft config set registry docker.io/myusername`
```

### Using draft
```
git clone https://github.com/Azure/draft
draft init
cd examples/example-python
# Creates Dockerfile and charts directory for helm
draft create
# build docker image locally, push to local registry, run on K8s.  Re-run when you update your code
draft up
draft logs 01CV4SN20M2N51AKQNGF3SDMEA
kubectl get pods
helm ls
# 
draft connect
```
