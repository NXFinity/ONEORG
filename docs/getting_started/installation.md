# Installation
[[BACK](../index.md)] [[NEXT]](installation.md)
## Prerequisites
- [Node.js](https://nodejs.org/en/) (v12.18.3 or higher)
- [Git](https://git-scm.com/) (v2.28.0 or higher)
- [Docker](https://www.docker.com/) (v19.03.12 or higher)
- [Docker Compose](https://docs.docker.com/compose/) (v1.26.2 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12.4 or higher)
- [Redis](https://redis.io/) (v6.0.8 or higher)
- [RabbitMQ](https://www.rabbitmq.com/) (v3.8.8 or higher)
- [Elasticsearch](https://www.elastic.co/) (v7.9.1 or higher)
- [NX](https://nx.dev/) (v16.10.0 or higher)
- [NX CONSOLE](https://plugins.jetbrains.com/plugin/15101-nx-console-idea) (v0.59.0 or higher)

## Installation
### Clone the repository
```bash
git clone https://github.com/NXFinity/ONEORG.git
```
### Install dependencies
```bash
cd ONEORG
npm install
```
### Configure environment variables
```bash
cp .env.example .env
```
### Start the application
```bash
nx serve portal
```
### Open the application
```bash
http://localhost:4200
```
