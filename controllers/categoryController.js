const express = require('express')
const categoryservice = require('../services/categoryService.js')

/*
exports.GetCategory = async(req,res)=>{
    res.send({
        status:false,
        message:"geldin"
    })
}*/


exports.GetCategory = async(req,res)=>{

      const response = categoryservice.fetchCategories();
      res.send({
          status:true,
          message:"Category Controllerdasın",
          data: response.categories
      })
}

