const http=require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{//kalau seperti ini, akses halaman lain yg gak ada tetap di kirim 200 OK
        'Content-Type': 'text/html'
    })
    res.write('hello worldddd');
    res.end();
}).listen(3000,()=>{
    console.log('Server is running on port 3000');
})