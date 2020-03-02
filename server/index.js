const express = require('express'); 
const { Pool } = require('pg');
const app = express(); 
const PORT = 3007;

const pool = new Pool({
  host: 'localhost',
  user: 'liz.anayaramos',
  database: 'biznote',
  port: 5432
}); 

pool.on('error', (err) => {
  if (err) {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  }
  console.log("Successfully Connected Database"); 
})

app.use(express.json()); 
app.use(express.static(__dirname + '/../client/dist')); 

app.post('/api/addCustomer', (req, res) => {

  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let address = req.body.address;
  let phoneNumber = req.body.phoneNumber;
  let emailAddress = req.body.emailAddress;
  let customerPersonalDetails = req.body.customerPersonalDetails;
  let customerProductDetails = req.body.customerProductDetails;
  let lastInteraction = req.body.lastInteraction;
  let lastInteractionDetails = req.body.lastInteractionDetails; 

  let postQueryString = 
    `INSERT INTO customer (firstName, lastName, address, phoneNumber, emailAddress, customerPersonalDetails, customerProductDetails, lastInteraction, lastInteractionDetails) 
    VALUES ('${firstName}', '${lastName}', '${address}', '${phoneNumber}', '${emailAddress}', '${customerPersonalDetails}', '${customerProductDetails}', '${lastInteraction}', '${lastInteractionDetails}')`; 

  pool.query(postQueryString, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
        res.status(200).json({results: results}); 
    }
  })
}); 

app.get('/api/getCustomer/:id', (req, res) => {
  let id = req.params.id; 

  let getQueryString = `SELECT * FROM customer WHERE customerid = ${id}`; 

  pool.query(getQueryString, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
        res.status(200).json({results: results}); 
    }
  })
}); 

app.delete('/api/deleteCustomer/:id', (req, res) => {

  let id = req.params.id;

  let deleteQueryString = `DELETE FROM customer WHERE customerid = ${id}`

  pool.query(deleteQueryString, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      return res.send("Removed") 
    }
  })
}); 

app.listen(PORT, () => {
  console.log("Listening from port", PORT); 
}); 
