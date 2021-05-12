// ACTUALIZAR ESTE ARCHIVO MANUALMENTE 
const express = require("express")
const path = require('path')
const stripe = require("stripe")('sk_test_51ImV0KC0XCYz6y0geFWbxrAYFgctaXTlxjBuxNjTUAGZhSO10YBoq7jcnqpq2y5iLc2G5cEg3bmr1JnGfmm1nILC00tUgyIAYg')
const cors = require("cors")
const app = express()


app.use(cors({ origin: "http://mariafavelacuantica.com" }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public_html') });
});

app.get('/api', (req, res) => {
  res.send('Hello Worldo!');
});

app.post("/api/payment", async (req, res) => {
  // you can get more data to find in a database, and so on
  const { id, amount, description } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      description,
      currency: "MXN",
      payment_method: id,
      confirm: true, //confirm the payment at the same time
    });

    console.log(payment);
    // console.log(process.env.REACT_APP_SECRET_KEY);

    // return res.status(200).json({ message: "Successful Payment" });
    return res.status(200).json( payment );
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public_html') });
})

app.listen(3000, () => {
  console.log("Server on port", 3000);
});
