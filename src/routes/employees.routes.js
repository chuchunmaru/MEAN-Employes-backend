const {Router} = require('express');
const router = Router()
const employessCTR = require('../controllers/employees.controllers');

router.get('/',employessCTR.getEmployees);

router.post('/',employessCTR.createEmployees);

router.get('/:id',employessCTR.getEmployee);

router.put('/:id',employessCTR.editEmployees);

router.delete('/:id',employessCTR.deleteEmployees);

module.exports = router;