const axios = require("axios");

exports.fetchCategories = async () => {

  
  const response = await axios.get(
    'https://api.trendyol.com/sapigw/product-categories');

  //console.log(response.data)

  return response.data
};
