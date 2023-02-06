## syntax=docker/dockerfile:1
#FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
#WORKDIR /app
    #
## Copy csproj and restore as distinct layers
#COPY ./TalentHunters/TalentHunters-BackEnd/TalentHunters-BackEnd.csproj ./
#RUN dotnet restore
    #
## Copy everything else and build
#COPY ./TalentHunters/TalentHunters-BackEnd ./
#RUN dotnet publish -c Release -o out
    #
#
## Build runtime image
#FROM mcr.microsoft.com/dotnet/aspnet:6.0
#WORKDIR /app
#COPY --from=build-env /app/out .
#ENTRYPOINT ["dotnet", "TalentHunters-BackEnd.dll"]
#
#



FROM mcr.microsoft.com/dotnet/aspnet:6.0 as base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
COPY . /src
WORKDIR /src
RUN ls
RUN dotnet build "TalentHunters-BackEnd.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TalentHunters-BackEnd.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TalentHunters-BackEnd.dll"]