var express = require('express');
var router = express.Router();
var fs=require('fs')
/* GET home page. */

router.get('/',function(req,res){
  res.send('LBG Assessment')
})
// To find the product of two numbers
router.get('/productvalue/:a1/:a2',function(req,res){
  var a1=parseInt(req.params.a1);
  var a2=parseInt(req.params.a2)
  if(isNaN(a1) || isNaN(a2)){

    res.end("Please Type a Number");
    }
    else{
      res.end((a1*a2).toString())
    }

})

// To accept a file content and write them to the disk.
router.get('/writeFile/:inputstring',function(req,res){
  var input=req.params.inputstring;
  fs.writeFile('newfile1.txt',input,function(err){
    if(err) {
        res.end(err);
    }
    res.send(input);
  })
})

//  To accept a String as an input name and return the first non-repeating character in the String.
router.get('/string/:input',function(req,res){
  var input = req.params.input;
  if(input==" "){
  res.end('please type the string')
}
else{
  for (var i = 0; i < input.length; i++) {
    var c = input.charAt(i);
    if (input.indexOf(c) == i && input.indexOf(c, i + 1) == -1) {
        res.end(c);
    }
}

}
})

// Web Crawler program
router.get('/crawler',function(req,res){
  var data=[];
var request = require('request');
var cheerio = require('cheerio');
var searchTerm = 'screen+scraping';
var url = "https://wiprodigital.com/";
request(url, function(err, resp, body){
  $ = cheerio.load(body);
  links = $('a'); //jquery get all hyperlinks
  $(links).each(function(i, link){
    data.push($(link).attr('href'));
    fs.writeFile('urllist.txt',data,function(err){
      if(err) {
        res.end(err)
    }
    else {
        res.json(data.join('\r\n'));
    }

    })
  });

});
})
module.exports = router;
