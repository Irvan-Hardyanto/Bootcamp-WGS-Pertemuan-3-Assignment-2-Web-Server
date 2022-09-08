//import module-module yang diberikan
const http = require('http');
const fs = require('fs');

//path ke berkas html.
const pathAbout = './about.html';
const pathContact = './contact.html';
const pathIndex = './index.html';

//fungsi untuk menampilkan halaman html
const showPage = (path, res) => {
    fs.readFile(path, (err, data) => {//kalo ada callback-> asinkronus
        if (err) {
            res.writeHead(404);//buat status code
            res.write('Error: page not found');
        } else {
            res.write(data);//tampilkan halaman web nya
        }
        res.end();
    });
}

//jalankan web server
http.createServer((req, res) => {
    const url = req.url;
    console.log(url);//log url yang dimasukkan

    res.writeHead(200, {//kalau seperti ini, browser akan tahu kalo response yang dikirimkan adalah data HTML
        'Content-Type': 'text/html'
    })//kalo bagian ini di bawah... ya data datadi bawah ini akan diagram pre
    if (url == '/about') {
        showPage(pathAbout, res);
    } else if (url == '/contact') {
        showPage(pathContact, res);
    } else {
        showPage(pathIndex, res);
    }
}).listen(3000, () => {//listen di port 3000
    console.log('Server is running on port 3000');//untuk konfirmasi bahwa web server telah berhasil dijalakan 
})