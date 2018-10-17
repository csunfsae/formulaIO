import tornado.ioloop
import tornado.web


class getHello(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello World")
