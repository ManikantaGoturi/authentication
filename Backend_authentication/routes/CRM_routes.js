const employeehandlers = require('../controllers/CRM_controller');
const express = require('express')
const router = express.Router()

router.post('/add',employeehandlers.createEmployeeDetails)
router.put('/update/:id',employeehandlers.updateSingleEmployeeDetails)
router.get('/allemployee',employeehandlers.getallEmployeeDetails)
router.get('/singleEmployee/:id',employeehandlers.getSingleEmployeeDetails)
router.delete('/deleteEmployee/:id',employeehandlers.deleteSingleEmployeeDetails)


module.exports = router
