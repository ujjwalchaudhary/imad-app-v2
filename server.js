var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    'article-One': {
    title:  'Article One',
    heading: 'Article One',
    date:    '3 April 2017',
    content:` 
             <p>
          this is the content of my one article.   this is the content of my one article. this is the content of my one article.     
           </p>
           
           <p>
          this is the content of my one article.   this is the content of my one article.  this is the content of my one article.     
          </p>
          
          <p>
          this is the content of my one article.   this is the content of my one article.  this is the content of my one article.     
          </p>`
},
    'article-two':{
                title:  'Article two',
                heading: 'Article two',
                date:    '3 April 2017',
                content:` 
                        <p>
                            this is the content of my two article.   this is the content of my two article. 
                            this is the content of my two article.     
                       </p>`
    },
    'article-three':{
                 title:  'Article three',
                 heading: 'Article three',
                 date:    '3 April 2017',
                 content:` 
                         <p>
                             this is the content of my three article.   this is the content of my three article. 
                             this is the content of my three article.     
                        </p>`
    },
};
function createTemplate (data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;


var htmlTemplate=`
<html>
    <head>
       <title>
       ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" />
      
    </head>
    <body>
        <div class="container">
                <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
       ${content}
        </div>
</div>           
 </body>
</html>
   `;
  return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req,res) {
    counter = counter+1;
    res.send(counter.toString());
});

app.get('/:articleName', function(req, res){
    //articleName == article-one
    //articles[articleName] == {}content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names =[];
app.get('/submit-name/:name', function(req,res){
    //Get the name from the request
    var name = req.params.name;
    
    names.push(name);
    //JSON: Javascript Object Notation
    res.send(JSON.Stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
