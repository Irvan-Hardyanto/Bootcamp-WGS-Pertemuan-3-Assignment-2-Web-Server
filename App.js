const http=require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    const url = req.url;
    console.log(url);

    res.writeHead(200,{//kalau seperti ini, browser akan tahu kalo response yang dikirimkan adalah data HTML
        'Content-Type': 'text/html'
    })//kalo bagian ini di bawah... ya data datadi bawah ini akan diagram pre
    if(url=='/about'){
        fs.readFile('./about.html',(err,data)=>{
            if(err){
                res.writeHead(404);//buat status code
                res.write('Error: page not found');
            }else{
                res.write(data);
            }
            res.end();
        })
    }else if(url=='/contact'){
        fs.readFile('./contact.html',(err,data)=>{
            if(err){
                res.writeHead(404);//buat status code
                res.write('Error: page not found');
            }else{
                res.write(data);
            }
            res.end();
        })
    }else{
        //iini method asinkronus... bisa pake promise...
        fs.readFile('./index.html',(err,data)=>{
            if(err){
                res.writeHead(404);//buat status code
                res.write('Error: page not found');
            }else{            
                res.write(data);
            }
            res.end();
        })
        //res.end();ini cukup sekali aja.. gak usah berkali-kali.
    }
}).listen(3000,()=>{
    console.log('Server is running on port 3000');
})