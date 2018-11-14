var http = require('http');
var url = require('url');
var router = require('./models/router');

http.createServer( function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8;'});
    if (request.url !== '/favicon.ico') {
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//, '');
        if (pathname && router[pathname]) {
        	console.log(pathname);
	        router[pathname](request, response);
	        response.write('<br />');
	        response.end('成功了。。。');
        }
    }
}).listen(8888);

console.log('Server running at http://localhost:8888');
