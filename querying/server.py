from http.server import HTTPServer, BaseHTTPRequestHandler
import json

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    coords = {'lat':0,'lon':0}
    def do_GET(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        """
        #pts = SimpleHTTPRequestHandler.coords
        #res = str(mapstest(pts['lat'], pts['lon'])).encode('utf-8')
        #self.wfile.write(res)
"""
        print('wrong!')

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        data = body.decode('utf-8').split('&')
        print(data)
        dic = {}
        for datum in data:
            keyval = datum.split('=')
            dic[keyval[0]] = keyval[1]
        print(dic)
        #b = str(body)
        #print(b[:].encode('utf-8'))
        #self.wfile.write(b)
        #return b


httpd = HTTPServer(('localhost', 8001), SimpleHTTPRequestHandler)
httpd.serve_forever()