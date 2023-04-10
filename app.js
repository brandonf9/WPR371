const express = require('express');
const app = express();

//Remove once proper code is done
app.get('/', function (req, res) {
    res.send('Server test');
  });
//End

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


//Test Comment