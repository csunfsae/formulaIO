# FormulaPy [![Build Status](https://travis-ci.org/csunfsae/formulaPy.svg?branch=master)](https://travis-ci.org/csunfsae/formulaPy)
![](/readme/csunfsaelogo.png)

# Web Software Team 
Python based asynchronous server to receive realtime data from Formula SAE Electric Vehicle sensors. 
- - - -
## Dependencies :
| Software  | Version |
| ------------- | :---: |
| 🐍 Python |  **v 3.6** |
| 🌪 Tornado  | **v 5.1** |
| GINO  | **v 0.8**|
| Flake8  | **v 3.5** |
| 🐳  Docker | **v 18.06**|
| _**Images**_ | **Docker Hub** |
| Python |  **v 3.6** |
| Grafana  | **v 5.1**|
| PostgreSQL | **v 11**|
- - - -
## Local Requirements
### Docker
[Get Started with Docker | Docker](https://www.docker.com/get-started)
### [Pipenv](https://pipenv.readthedocs.io/en/latest/install/#crude-installation-of-pipenv)
* Via [Homebrew](https://brew.sh/)  (Mac only)
```sh 
brew install pipenv
```
* Via [PIP](https://pip.pypa.io/en/stable/installing/)
```sh
pip install --user pipenv
```
```sh
curl https://raw.githubusercontent.com/kennethreitz/pipenv/master/get-pipenv.py | python
```
- - - -
## Running Locally
Commands
```sh
# Build using docker-compose
docker-compose build

# Build and start docker images
docker-compose up --build
```

