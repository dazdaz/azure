The Windows nanoserver image does not include .NET core nor PowerShell to reduce the size of the container, therefore if you require these,
then you will need to add them back in when building the container image, or use a Windows container image which has already included them.

https://blogs.msdn.microsoft.com/webdev/2017/11/09/creating-a-minimal-asp-net-core-windows-container/
https://docs.microsoft.com/en-us/virtualization/windowscontainers/quick-start/nano-rs3-.net-core-and-ps
https://thenewstack.io/changes-coming-nano-server-fall-devops-containers/ Background reading on nanoserver images
https://gist.github.com/artisticcheese/e4776f420f1d0088d87335284b103cce Dockerfile to build IIS + nanoserver (Windows Server 1803) + ASP.NET core 2.1.1

Latest Windows container images on DockerHub from Microsoft
https://hub.docker.com/r/microsoft/nanoserver/
https://hub.docker.com/r/nanoserver/iis/

This image has dotnet 2.1 on nanoserver 1803
https://github.com/dotnet/docs/blob/master/docs/standard/microservices-architecture/net-core-net-framework-containers/net-container-os-targets.md
microsoft/dotnet:2.1-aspnetcore-runtime-nanoserver-1803
