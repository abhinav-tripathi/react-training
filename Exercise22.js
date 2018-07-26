/**
 * Write a function request which when called with 
 * parameter as shown below prints url and method value
   request({url : ‘http//www.google.com’, method : ‘GET’ })
 * Prints value like
   http: //www. google. com
   GET
 */

const urlInfo = {url: "http://www.google.com", method: 'GET'};

let request = ({url: url, method: method}) => {
   console.log(url);
   console.log(method);
};

request(urlInfo);