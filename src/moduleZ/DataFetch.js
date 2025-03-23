const axios = require('axios');  

const fetchData = async (url) => {  
  const result = {  
    data: [],  
    isLoading: true,  
    error: null,  
  };  

  try {  
    const response = await axios.get(url);  
    result.data = response.data;  
  } catch (error) {  
    result.error = error?.message || 'Unknown error';  
  } finally {  
    result.isLoading = false;  
  }  

  return result;  
};  

module.exports = fetchData;    