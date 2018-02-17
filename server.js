const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

/* start RethinkDB */
const r = require('rethinkdb');

var connection = null;
r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    
    if (err) {
      throw err;
    }

    conn.use('league_play');
    connection = conn;
});

// inserting new user
/*

r.db('league_play').table('users').insert({
  "first_name": "Greg",
  "last_name": "Van Gorp",
  "handicap": 2.8,
  "age": 26 })

  */

  /* getting total yardage 

    var goldYardage = nhgc.holes.reduce(function(memo, hole) {
      console.log(memo, ' ', hole.tees.gold);
      return memo + hole.tees.gold;
    }, 0)

  */

app.get('/api/v1/get-users', (req, res) => {
  r.table('users').run(connection, function(err, cursor) {
      if (err) {
        throw err;
      }
      
      cursor.toArray(function(err, result) {
          if (err) throw err;
          console.log(JSON.stringify(result, null, 2));
          res.send({ users: result });
      });

  });

});


app.listen(port, () => console.log(`Listening on port ${port}`));








