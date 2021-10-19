// *********************** ALL THE ENDPOINTS DEDICATED TO STUDENTS ************************

// *********************** STUDENTS CRUD **************************************************

// 1. CREATE --> POST http://localhost:3001/students (+ body)
// 2. READ --> GET http://localhost:3001/students (+ optional Query Parameters)
// 3. READ --> GET http://localhost:3001/students/:id
// 4. UPDATE --> PUT http://localhost:3001/students/:id (+ body)
// 5. DELETE --> DELETE http://localhost:3001/students/:id

import express from "express"

const studentsRouter = express.Router() // a Router is a set of endpoints that share something like a prefix (studentsRouter is going to share /students as a prefix)

export default studentsRouter
