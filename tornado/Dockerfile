FROM python:3.7
ADD . /code
WORKDIR /code
RUN pip install -U pipenv
RUN pipenv install --system
CMD ["python", "app.py"]