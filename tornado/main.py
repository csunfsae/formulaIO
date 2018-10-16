import tornado.ioloop
import tornado.web
import logging
import routes

from tornado.options import define, options, parse_command_line

logger = logging.getLogger(__name__)

define("port", default=8888, help="run on the given port", type=int)
define("debug", default=True, help="run in debug mode")


def main():
    parse_command_line()
    app = tornado.web.Application(routes.urls, debug=options.debug)
    app.listen(options.port)
    logger.info(f"🏁 🏎️  Running on port {options.port}  🏎️ 🏁")
    tornado.ioloop.IOLoop.current().start()


if __name__ == "__main__":
    main()
