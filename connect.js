var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.end('hello World!');

}).listen(5000); 
//syntax for importing module
//const mod=require('module_name');
//const used to only access by you