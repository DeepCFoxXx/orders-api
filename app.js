require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Order = require('./order');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected (DB)');
}).catch((err) => {
  console.error('DB Error', err);
});

app.post('/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).send({ error: 'Not Found' });
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.put('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!order) {
      return res.status(404).send({ error: 'Not Found' });
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.delete('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).send({ error: 'Not Found' });
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});