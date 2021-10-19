// OLD IMPORT SYNTAX const express = require("express")
import express from "express" // NEW IMPORT SYNTAX (remember to add type: "module" in package.json to use new syntax)

const server = express()

const port = 3001

server.listen(port, () => {
  console.log("Server running on port:", port)
})
