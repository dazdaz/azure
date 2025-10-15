# Azure_OSS_Updates
Purpose: Track Azure OSS Updates, Links, Comments, Notes, OSS on Azure<br>
Disclaimer: Personal colleciton of links, not endorsed by Microsoft<br>

Date: 30/10/2017<br>
Update: #6<br>
<br>

Build and run Docker containers leveraging NVIDIA GPUs
https://github.com/NVIDIA/nvidia-docker

Install NVIDIA GPU drivers on N-series VMs running Linux
https://docs.microsoft.com/en-us/azure/virtual-machines/linux/n-series-driver-setup

How to use GPUs in OpenShift and Kubernetes
https://blog.openshift.com/use-gpus-openshift-kubernetes/

Build out Docker Swarm on Azure using Terraform
http://container-solutions.com/docker-swarm-azure-container-services/

Date: 23/10/2017<br>
Update: #5<br>
<br>

DNS Updates using Azure Functions
https://svenmeury.ch/dynamic-dns-updates-with-azure-function-app/


Open Source Weekly #2
https://open.microsoft.com/2017/10/20/open-source-weekly-october-20/

Date: 09/10/2017<br>
Update: #4<br>
<br>

Autoscaling a Kubernetes cluster created with acs-engine on Azure
https://medium.com/@wbuchwalter/autoscaling-a-kubernetes-cluster-created-with-acs-engine-on-azure-5e24ddc6402e

https://www.youtube.com/watch?v=s0crdDpkWEk An overview of Web Apps for Containers on Linux - Sunitha Muthukrishna<BR>
https://channel9.msdn.com/events/Build/2017/B8026 App Service on Linux<br>
https://channel9.msdn.com/Shows/Azure-Friday/App-Service-on-Linux<br>
https://channel9.msdn.com/events/Connect/2016/199 Nazim Lala<br>
https://channel9.msdn.com/events/Ignite/New-Zealand-2016/M355<br>
https://www.youtube.com/watch?v=y_zAJZC_8Yk&feature=youtu.be Azure Friday: Azure App Service with Hybrid Connections to On-premises Resources<BR>

Presentations on .NET+Containers from Steve Lasker
https://github.com/stevelasker/presentations
https://github.com/SteveLasker/Presentations/tree/master/ProductSlides

ACR Roadmap
https://github.com/Azure/acr/blob/master/docs/acr-roadmap.md

ACR is now GA with 3 SKU's - Basic, Standard, Premium.  Classic SKU will be deprecated
https://docs.microsoft.com/en-us/azure/container-registry/container-registry-skus

OpenShift Container Platform 3.6 with Username / Password authentication for OpenShift
https://github.com/mglantz/ocp36-azure-cns/blob/master/README.md

Enabling getting telemetry data for .NET Core application running inside containers that managed by Kubernetes.
https://github.com/Microsoft/ApplicationInsights-Kubernetes/

Microsoft Support Policy on Containers
https://support.microsoft.com/en-us/help/4035670/support-policy-for-containers

Azure Container Services Kubernetes 1.7 Branch
https://github.com/Azure/kubernetes/tree/release-1.7

CI/CD with Jenkins Pipeline and Azure 
https://jenkins.io/blog/2017/08/10/kubernetes-with-pipeline-acs/#ci-cd-with-jenkins-pipeline-and-azure

Date: 02/10/2017<br>
Update: #3<br>
<br>

acs-engine 0.8.0 - Kubernetes v1.6.11, v1.7.7, and v1.8.0 support
https://github.com/Azure/acs-engine/releases/tag/v0.8.0

Azure Functions Supports Java
https://www.geekwire.com/2017/microsoft-adds-support-java-azure-functions-serverless-service/

Microsoft Azure SDK for Python https://github.com/Azure/azure-sdk-for-python/tree/master/azure-mgmt-containerinstance

Azure Container Instance command line options
https://github.com/Azure/azure-cli/tree/master/src/command_modules/azure-cli-container

Date: 25/09/2017<br>
Update: #2<br>

Seven reasons why so many Node.js devs are excited about Microsoft Azure
https://azure.microsoft.com/en-us/blog/seven-reasons-why-so-many-node-js-devs-are-excited-about-microsoft-azure/

Windows Server 1709 contains several enhancements for Docker customers
https://blog.docker.com/2017/09/docker-windows-server-1709/

Docker on Azure Hands-On Lab - Docker to Helm
https://github.com/ragsns/dockeronazure.git

Instructions on how to instantiate a multi-node, IPv6-only Kubernetes cluster
https://github.com/leblancd/kube-v6

Updates in Maven, Jenkins, Visual Studio Code and IntelliJ help Java developers rapidly adopt cloud-native patterns in Azure and debug faster, as well as added support for Managed Disks, Cosmos DB and Container Service in the Azure Management Libraries for Java
https://azure.microsoft.com/en-us/blog/ready-for-javaone-bringing-java-and-kubernetes-together-in-azure/

Using Ansible with VSTS (Team Services)
https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.vss-services-ansible
https://azure.microsoft.com/en-us/blog/visual-studio-team-services-august-2017-digest/
https://docs.microsoft.com/en-us/vsts/release-notes/2017/aug-04-team-services

Video interview with Azure Container Instance, Principal Program Manager :  Sean McKenna
https://channel9.msdn.com/Shows/Tuesdays-With-Corey/Tuesdays-with-Corey-Azure-Container-Instances

Brendan Burns - Code to demo's from Ignite 2017
https://github.com/brendandburns/acs-ignite-demos

Date: 18/09/2017<br>
Update: #1<br>
<br>

https://github.com/Azure/acs-engine/releases/tag/v0.7.0<br>

<pre>
Highlights / Overview :
* Add support for DC/OS version 1.10
* Added RHEL support for SwarmMode
* Defaulting to version 1.7 for Kubernetes deployments
* SwarmMode clusters with hybrid Linux/Windows agent pools
* Support for Aggregated APIs in Kubernetes
</pre>

Roadmap of Kubernetes on Azure
https://github.com/Azure/ACS/blob/master/kubernetes-status.md

Roadmap of ACR on Azure
https://github.com/Azure/acr/blob/master/docs/acr-roadmap.md

Cross Vnet K8s clusters with ACS
https://github.com/xtophs/acs-k8s-cross-vnet-clusters

ACS engine has the ability to do upgrades but, per the documentation on GitHub, it’s experimental only:
https://github.com/Azure/acs-engine/tree/master/examples/k8s-upgrade

Azure Container Networking – VNET integrates with k8s when deploying an orchestrator through acs-engine
https://github.com/Azure/azure-container-networking/blob/master/docs/acs.md

Create a persistent volume using an Azure Disk without creating Storage Account in Advance for Kubernetes
https://blogs.technet.microsoft.com/livedevopsinjapan/2017/05/16/azure-disk-tips-for-kubernetes/

Distributed Cassandra ring across 2 ACS Kubernetes Clusters in different regions
https://github.com/xtophs/acs-k8s-cassandra-multi-dc

WordPress and Azure Redis Cache
http://blog.repsaj.nl/index.php/2017/05/azure-wordpress-and-azure-redis-cache/

Windows Networking will be updated in next Windows Server release to address feature parity differences with Linux k8s
https://www.cncf.io/blog/2017/09/08/windows-networking-parity-linux-kubernetes/

Node-level autoscaler for Kubernetes clusters created with acs-engine
https://github.com/wbuchwalter/Kubernetes-acs-engine-autoscaler

Learn about all the features available in VSTS and TFS
https://docs.microsoft.com/en-us/vsts/user-guide/alm-devops-features

Chef Habitat Integration for VSTS in the Visual Studio Marketplace
https://blog.chef.io/2017/09/19/habitat-integration-for-vsts-in-visual-studio-marketplace/

Docker Enterprise Edition Client Bundles
https://blog.docker.com/2017/09/get-familiar-docker-enterprise-edition-client-bundles/

Microsoft and Canonical Increase Velocity with Azure Tailored Kernel
https://insights.ubuntu.com/2017/09/21/microsoft-and-canonical-increase-velocity-with-azure-tailored-kernel/

Compute IP address ranges (including SQL ranges) used by the Microsoft Azure Datacenters - Updated each week
https://www.microsoft.com/en-us/download/details.aspx?id=41653&751be11f-ede8-5a0c-058c-2ee190a24fa6=True

Scale Kubernetes pods and Kubernetes infrastructure
https://docs.microsoft.com/en-us/azure/container-service/kubernetes/container-service-tutorial-kubernetes-scale
