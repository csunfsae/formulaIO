![](http://www.ecs.csun.edu/sae/images/Matador%20Motorsports%20CSUN%20logo.png)

# Formula SAE Electric Vehicle
[![Build Status](https://travis-ci.org/csunfsae/formulaPy.svg?branch=master)](https://travis-ci.org/csunfsae/formulaPy)

> Web Software Team

Python based asynchronous server to receive realtime data from Formula SAE Electric Vehicle sensors. 

## Dependencies
>:snake:Python -  *v 3.6*  | 🌪️Tornado  - *v 5.1* | GINO  - *v 0.8* | Flake8  - *v 3.5* 

>:whale:Docker - *v 18.06* | :elephant:PostgreSQL - *v 11* | Grafana  - *v 5.1*

## Local Requirements
### Docker
[Get Started with Docker | Docker](https://www.docker.com/get-started)
### Pipenv
[Installation](https://pipenv.readthedocs.io/en/latest/install)
* Via [Homebrew](https://brew.sh/)  (Mac only)
```bash
brew install pipenv
```
* Via [PIP](https://pip.pypa.io/en/stable/installing/)
```bash
pip install --user pipenv
```
```bash
curl https://raw.githubusercontent.com/kennethreitz/pipenv/master/get-pipenv.py | python
```

## Running Locally
Commands
```bash
# Build using docker-compose
docker-compose build

# Build and start docker images
docker-compose up --build
```

