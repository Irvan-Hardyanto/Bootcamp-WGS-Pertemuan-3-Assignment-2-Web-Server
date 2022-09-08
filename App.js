const http=require('http');

http.createServer((req,res)=>{
    const url = req.url;
    console.log(url);

    res.writeHead(200,{//kalau seperti ini, browser akan tahu kalo response yang dikirimkan adalah data HTML
        'Content-Type': 'text/html'
    })//kalo bagian ini di bawah... ya data datadi bawah ini akan diagram pre
    if(url=='/about'){
        res.write('<h2>This is about page</h2>');//meskipun kita cuma kirim h1 h2 tanpa ada tag html, browser tetep tau kalo ini html
        res.end();
    }else if(url=='/contact'){
        res.write('<h2>This is contact page</h2>');
        res.end();
    }else{
        res.write('hello worldddd');
        res.end();
    }
}).listen(3000,()=>{
    console.log('Server is running on port 3000');
})