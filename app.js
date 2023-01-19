const request = require('request');

const axios = require('axios');

const express = require ('express');

//const cheerio = require('cheerio');
var app = express();
//var https = require("https");
//https.createServer().listen(8080);

const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/posts/59",
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts/178",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/users/987",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/todos/967",
  "https://jsonplaceholder.typicode.com/comments/732",
  "https://jsonplaceholder.typicode.com/photos",
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplaceholder.typicode.com/photos/800"
];



const checkLink = () => {
    let activeLinks = [];
    let inactiveLinks = [];

    const link = urls.map(async (url) => {
        const data = await fetch(url);

        if(data.status === 200){
            activeLinks.push(url);
        }else {
            inactiveLinks.push(url);
        }
    })

    Promise.all(link).then(() => {
        console.log("Active links")
        activeLinks.map((res) => console.log(res));
        console.log("Inactive links")
        inactiveLinks.map((res) => console.log(res));
    })
}
checkLink();

// let activeLinks = [];
// let inactiveLinks = [];



// var promises = urls.map(url => await fetch(url)) {;
// Promise.all(promises).then(results => {
//     if( == 200){
//         activeLinks.push(url);
//     }else{
//         inactiveLinks.push(url);
//     }
// }
// });

// const checkLinks = async () => {
//     for (const link of urls) {
//         try {
//             await axios.get(link);
//             activeLinks.push(link);
//         } catch (error) {
//             inactiveLinks.push(link);
//         }
//     }
//     console.log("Active Links: ", activeLinks);
//     console.log("Inactive Links: ", inactiveLinks);
// }

// checkLinks();
// console.log(activeLinks);
// console.log(inactiveLinks);

// urls.forEach((link) => {
//     request(link, (err, res) => {
//         if (!err && res.statusCode !== 404) {
//             activeLinks.push(link);
//         } else {
//             inactiveLinks.push(link);
//         }
//     });
// });
// for(let i =0;i<urls.length;i++) {
//     var url = urls[i];
//     axios.get(url).then(resp => {
//         if(resp !== 404){
//             activeLinks.push(url);
//         }
//         else{
//             inactiveLinks(url);
//         }
//     });
// }






// var url = urls[i];
// var req = https.get(url,function(res){
//     if(res.statusCode == 404){
//         activeLinks.push(url);
//     }else{
//         inactiveLinks.push(url);
//     }
// });

// for( let i = 0;i<urls.length ;i++){
//     var url = urls[i];

//     request(url, (err,res) => {
//         if(!err && res.statusCode == 200) {
//             const links = JSON.parse(res.body).links;
//             links.forEach((link) => {
//                 request(link,(err,res)=>{
//                     if(!err && res.statusCode ==200){
//                         activeLinks.push(link);
//                     }else{
//                         inactiveLinks.push(link);
//                     }
//                 })
                
//             });
//         }
//     });