# Getting Started
## How to use the ONEORG application

[[BACK](../index.md)]

The easiest way to use the [ONEORG](https://oneorg.uk) application is by visiting [ONEORG](https://oneorg.uk) and registering for an account. Once you have registered, you can log in and start using the application.
This includes the ability to deploy your own solutions, such as the 'OneOrg Media Engine', across various deployments including locally using WSL2.

## Pre-Requisites
```
- Docker
- Docker Compose
- WSL2
- Linux Ubuntu 20.04 LTS
- NodeJS 18.12.0
```

## How to use the ONEORG application locally
```bash
docker --name oneorg --config ./config/oneorg.yml up -d oneorg/oneorg:latest
```
