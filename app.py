import os
from bottle import (get, post, redirect, request, route, run, static_file, error, template)
import json
from collections import OrderedDict
from operator import itemgetter
from sys import argv


@error(404)
def not_found(error):
    section_template = "./templates/404.tpl"
    return template("./pages/index.html", version=utils.getVersion(), sectionTemplate=section_template, sectionData = {})


@get("/js/<filepath:re:.*\.js>")
def js(filepath):
    return static_file(filepath, root="./js")


@get("/css/<filepath:re:.*\.css>")
def css(filepath):
    return static_file(filepath, root="./css")


@get("/images/<filepath:re:.*\.(jpg|png|gif|ico|svg)>")
def img(filepath):
    return static_file(filepath, root="./images")


@route('/')
def index():
    return template("./start.html")


def main():
    run(host='localhost', port=8080, debug=True)


if __name__ == '__main__':
    main()

