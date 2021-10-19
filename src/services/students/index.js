// *********************** ALL THE ENDPOINTS DEDICATED TO STUDENTS ************************

// *********************** STUDENTS CRUD **************************************************

// 1. CREATE --> POST http://localhost:3001/students (+ body)
// 2. READ --> GET http://localhost:3001/students (+ optional Query Parameters)
// 3. READ --> GET http://localhost:3001/students/:studentId
// 4. UPDATE --> PUT http://localhost:3001/students/:studentId (+ body)
// 5. DELETE --> DELETE http://localhost:3001/students/:studentId

import express from "express" // 3RD PARTY MODULE (does need to be installed)
import fs from "fs" // CORE MODULE (doesn't need to be installed)
import { fileURLToPath } from "url" // CORE MODULE (doesn't need to be installed)
import { dirname, join } from "path" // CORE MODULE (doesn't need to be installed)

const studentsRouter = express.Router() // a Router is a set of endpoints that share something like a prefix (studentsRouter is going to share /students as a prefix)

// ********************* how to find out the path *************
// 1. I'll start from the current file I'm in right now (C://......./students/index.js) and I'll get the path to that file
const currentFilePath = fileURLToPath(import.meta.url)
// 2. I'll get the parent folder's path
const parentFolderPath = dirname(currentFilePath)
// 3. I can concatenate the parent's folder path with students.json --> "C:\Strive\FullStack\2021\Aug21\M5\strive-m5-d2-aug21\src\services\students\students.json"
const studentsJSONPath = join(parentFolderPath, "students.json") // DO NOT EVER USE '+' TO CONCATENATE TWO PATHS, USE JOIN INSTEAD

// 1.
studentsRouter.post("/", (req, res) => {
  // First parameter is relative URL, second parameter is the REQUEST HANDLER
  console.log("REQUEST METHOD: ", req.method)
  res.send("HELLO WORLD I'M THE POST ROUTE")
})

// 2.
studentsRouter.get("/", (req, res) => {
  // 1. Read the content of students.json file

  const fileContent = fs.readFileSync(studentsJSONPath) // You are getting back the file content in the form of a BUFFER (machine readable)

  console.log(JSON.parse(fileContent))

  const arrayOfStudents = JSON.parse(fileContent) // JSON.parse is translating buffer into a real JS array
  // 2. Send it back as a response
  res.send(arrayOfStudents)
})

// 3.
studentsRouter.get("/:studentId", (req, res) => {
  // 1. Read the content of students.json file (obtaining an array)

  const students = JSON.parse(fs.readFileSync(studentsJSONPath))

  // 2. Find the user by id in the array

  const student = students.find(s => s.id === req.params.studentId) // in the req.params I need to use the exact same name I have used in the "placeholder" in the URL

  // 3. Send the user as a response

  res.send(student)
})

// 4.
studentsRouter.put("/:studentId", (req, res) => {
  console.log("REQUEST METHOD: ", req.method)
  res.send("HELLO WORLD I'M THE PUT ROUTE")
})

// 5.
studentsRouter.delete("/:studentId", (req, res) => {
  console.log("REQUEST METHOD: ", req.method)
  res.send("HELLO WORLD I'M THE DELETE ROUTE")
})

// studentsRouter.get("/whatever", (req, res) => {})

export default studentsRouter
