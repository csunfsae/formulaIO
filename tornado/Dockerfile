FROM python:3.6
ADD . /code
WORKDIR /code
RUN pip install -U pipenv
RUN pipenv install --system
CMD ["python", "main.py"]