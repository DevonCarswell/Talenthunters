# syntax=docker/dockerfile:1
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app
    
# Copy csproj and restore as distinct layers
COPY ./TalentHunters/TalentHunters-BackEnd/TalentHunters-BackEnd.csproj ./
RUN dotnet restore
    
# Copy everything else and build
COPY ./TalentHunters/TalentHunters-BackEnd ./
RUN dotnet publish -c Release -o out
    

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "TalentHunters-BackEnd.dll"]