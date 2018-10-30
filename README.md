![](/readme/csunfsaelogo.png)

# Formula SAE Electric Vehicle
[![Build Status](https://travis-ci.org/csunfsae/formulaIO.svg?branch=master)](https://travis-ci.org/csunfsae/formulaIO)

> Web Software Team

NodeJs based asynchronous server to receive realtime data from Formula SAE Electric Vehicle sensors. 

## Dependencies

>Express - *v 4.16* | NodeJS - *v 10.11*| Socket.io - *v 2*

>:whale:Docker - *v 18.06* | :elephant:PostgreSQL - *v 11* | Grafana  - *v 5.1*

## Local Requirements
### Docker-CE
[Install Docker CE](https://docs.docker.com/install/)

```bash
# Verify installation is active
systemctl show --property ActiveState docker
```

### Node

[Download and install Node LTS](https://nodejs.org/en/download/)

### Yarn

[Install the latest release of Yarn](https://yarnpkg.com/lang/en/docs/install/)

## Running Locally

Commands

> *SUDO may be required to run such commands*


```bash
# Install yarn in socket directory
cd socket && yarn install

# Build using docker-compose 
# This will only build the images.
docker-compose build

# Build and start docker images
# This will build and start the docker images.
docker-compose up --build

```
