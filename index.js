var express = require('express');
var mysql = require('mysql')
var app   = express();


var connection = mysql.create.Connection({
	host: '127.0.0.1',
	user: 'root',
	password: 'redhat'
	database: 'awsdb'

});

connection.connect(function(error) {
  if (error) {
          console.log("Error");
  } else {
	  console.log('Connected');
  }

});

app.get('/',function(req, resp) {
	//  about mysql 

	connection.query("SELECT * FROM awsdb", function(error , rows , fields)
		if (!!error) {
                       console.log("Error in the query");
               } else {
                       console.log('Sucess the query ');

            } 

	   
        });
})

app.listen(1337);



