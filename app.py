import asyncio
import tornado.escape
import tornado.ioloop
import tornado.locks
import tornado.web
import os.path
import uuid

from tornado.options import define, options, parse_command_line

define("port", default=8888, help="run on the given port", type=int)
define("debug", default=True, help="run in debug mode")


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello World")

def main():
    parse_command_line()
    app = tornado.web.Application(
        [
            (r"/", MainHandler)
        ],
        xsrf_cookies=True,
        debug=options.debug,
    )
    app.listen(options.port)
    tornado.ioloop.IOLoop.current().start()


if __name__ == "__main__":
    main()