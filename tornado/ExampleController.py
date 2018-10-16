import tornado.ioloop
import tornado.web
# import models


class getHello(tornado.web.RequestHandler):
    async def get(self):
        self.write("Hello World")
