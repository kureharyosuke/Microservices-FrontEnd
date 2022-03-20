"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors({
    origin: ["http://localhost:3000", "https://localhost:8080", "http://localhost:4200"],
}));
app.use(express.json());
console.log("✅ Listening on port: 8000");
app.listen(8000);
