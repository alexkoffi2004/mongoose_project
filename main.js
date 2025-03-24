require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const connectToDatabase = require('./dbConnection/mongoDbConnection');

// définition du port

const PORT = process.env.PORT || 3000;

// Création du serveur Express
const app = express();

// middleware
app.use(express.json());


// connectToDatabase
connectToDatabase()

app.listen(PORT, console.log(`server is running on https://localhost:${PORT}`));