# Azure_Cloud_Shell - Opening a port
* https://docs.microsoft.com/en-ca/azure/cloud-shell/using-the-shell-window#web-preview

#### Recipe to download files quickly from Azure Cloud Shell using Python3 - Warning : no authentication
```
python -m http.server 9000
ssh -R 80:localhost:9000 serveo.net
# Open up port 9000 in portal
# Point browser to -> https://abcdef.serveo.net
```

#### Execute specific pre-programmed commands in the Azure Shell via a web browser with authentication
```
wget https://github.com/msoap/shell2http/releases/download/1.13/shell2http-1.13.linux.amd64.tar.gz
tar xvzf shell2http-1.13.linux.amd64.tar.gz
./shell2http -basic-auth admin:admin -port 9000 /date date /ps "ps aux" 1>/dev/null 2>/dev/null &
ssh -R 80:localhost:9000 serveo.net
# Open up port 9000 in portal
# Point browser to -> https://abcdef.serveo.net
```

#### Recipe to run portable ssh server (dropbear) in Azure Shell
```
# From laptop
ssh-keygen -t dsa -C "Firstname Lastname Dropbear" -t rsa -b 4096
copy ~/.ssh/id_rsa.pub to azurecloudshell:/~/.ssh/authorized_keys

# From Azure Cloud Shell
wget https://matt.ucc.asn.au/dropbear/releases/dropbear-2019.78.tar.bz2
tar xvjf dropbear-2019.78.tar.bz2 && cd dropbear-2019.78
./configure --enable-static && make
./dropbearkey -t rsa -f dropbear_rsa_host_key
./dropbear -r ./dropbear_rsa_host_key -p 9000
ssh -o ServerAliveInterval=60 -R 18080:localhost:9000 serveo.net
# Open up port 9000 via Azure portal

# From laptop
ssh -l <myusername> serveo.net -p 18080
```
