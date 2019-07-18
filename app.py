import os
from bottle import (get, post, redirect, request, route, run, static_file, error, template)
import json
from collections import OrderedDict
from operator import itemgetter
from sys import argv


@error(404)
def not_found(error):
    return template("./error.html")


@get("/js/<filepath:re:.*\.js>")
def js(filepath):
    return static_file(filepath, root="./js")


@get("/offline/<filepath:re:.*\.js>")
def js(filepath):
    return static_file(filepath, root="./js")


@get("/css/<filepath:re:.*\.css>")
def css(filepath):
    return static_file(filepath, root="./css")


@get("/img/<filepath:re:.*\.(jpg|png|gif|ico|svg)>")
def img(filepath):
    return static_file(filepath, root="./img")


@route('/')
def index():
    return template("./start.html")


@route('/q1')
def index():
    return template("./q1.html")


@route('/q2')
def index():
    return template("./q2.html")


@route('/q3')
def index():
    return template("./q3.html")


@route('/q4')
def index():
    return template("./q4.html")


@route('/q5')
def index():
    return template("./q5.html")


@route('/q6')
def index():
    return template("./q6.html")


@route('/q7')
def index():
    return template("./q7.html")


def main():
    run(host='localhost', port=8080, debug=True)


if __name__ == '__main__':
    main()

