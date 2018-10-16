from gino.ext.tornado import Gino  # , Application, GinoRequestHandler

db = Gino()

# Example
# User Model


class User(db.Model):
        __tablename__ = 'users'
        id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
        nickname = db.Column(db.Unicode(), nullable=False)
