//Callback hell

const fs = require('fs');
fs.readFile('json/luigi.json', 'utf-8', function(err, data) {
    if (err) {
    console.log(err);
    }
    console.log('File data:', data);

    fs.readFile('json/mario.json', 'utf-8', function(err, data) {
            if (err) {
            console.log(err);
            }
            console.log('File data:', data);

            fs.readFile('json/shaun.json', 'utf-8', function(err, data) {
                if (err) {
                    console.log(err);
                    }
                    console.log('File data:', data);
            });
    });


});

/* 
getTodos('json/luigi.json', (err, data) => {
    console.log(data);
    getTodos('json/mario.json', (err, data) => {
      console.log(data);
      getTodos('json/shaun.json', (err, data) => {
        console.log(data);
      });
    });
  });    */