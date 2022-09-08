const http=require('http');
const fs = require('fs');

const pathAbout = './about.html';
const pathContact = './contact.html';
const pathIndex = './index.html';

const showPage=(path,res)=>{
    return new Promise((resolve,reject)=>{    
        fs.readFile(path,(err,data)=>{
            if(err){
                res.writeHead(404);//buat status code
                res.write('Error: page not found');
            }else{
                res.write(data);
            }
            res.end();
        });
    })
}
http.createServer((req,res)=>{
    const url = req.url;
    console.log(url);

    res.writeHead(200,{//kalau seperti ini, browser akan tahu kalo response yang dikirimkan adalah data HTML
        'Content-Type': 'text/html'
    })//kalo bagian ini di bawah... ya data datadi bawah ini akan diagram pre
    if(url=='/about'){
        showPage(pathAbout,res);
    }else if(url=='/contact'){
        showPage(pathContact,res);
    }else{
        showPage(pathIndex,res);
    }
}).listen(3000,()=>{
    console.log('Server is running on port 3000');
})