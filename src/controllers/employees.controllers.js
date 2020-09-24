const employeeCTR = {}
const { json } = require('express');
const { findByIdAndUpdate } = require('../models/Employee');
const Employee = require('../models/Employee');

employeeCTR.getEmployees = async(req,res) => {
    const employees = await Employee.find();
    res.json(employees);
} 
employeeCTR.getEmployee = async(req,res) => {
    console.log(req.params)
    const employee = await Employee.findById(req.params.id)
    res.send(employee); 
} 
employeeCTR.createEmployees = async(req,res) => {
    const newEmployee = new Employee(req.body);
    console.log(newEmployee)

    await newEmployee.save()

    res.send({message:'Employee Created'}); 
} 
employeeCTR.editEmployees = async(req,res) => {
    await Employee.findByIdAndUpdate(req.params.id,req.body)
    res.json({status:'Employee updated'}); 
} 
employeeCTR.deleteEmployees = async(req,res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({
        status:'Employee Deleted'
    });
} 

module.exports = employeeCTR;