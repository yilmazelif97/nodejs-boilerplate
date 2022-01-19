const express = require("express");
const categoryservice = require("../services/categoryService");

exports.GetCategory = async (req, res) => {
  const response = categoryservice.fetchCategories();
  res.send({
    status: true,
    message: "Category Controllerdasın",
    data: response.categories,
  });
};

exports.GetCategorybyID = async (req, res) => {

  const response = categoryservice.fetchSingleCategory(req.params.id);

  if (response) {
    res.send({
      status: true,
      message: "Single kategori func",
      data: response
    });
  } else {
    console.log("response yok");
  }
};

exports.deneme = async (req, res) => {

    console.log(req.params.id);
    console.log(req.params.name)

    const send = res.send(req.params)

    console.log(send)

  };


// exports.GetCategorybyIdandName = async (req, res) => {
//      console.log(req.params.id);
//      console.log(req.params.name)

        // const send = res.send(req.params)
  
//      const response = categoryservice.fetchSingleCategorybyıdandname(send);
  
//      if (response) {
//        console.log("response var");
//        res.send({
//          status: true,
//          message: "Single kategori func",
//          data: response,
//        });
//        });
//      } else {
//        console.log("response yok");
//      }
//    };