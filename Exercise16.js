/** Write a parseProtocol(url)which takes url as parameter and returns the protocol for me
 * Like below
 * console.log(parseProtocol(https //sytamatik. com/en-US/ Web/Home))
 * Result returned should be https
 *   Modify the method to return fullurl, protocol and host part separately
 */

let getTheUrlData = (url) => {
    let [fullUrl, protocol, host] = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);

    return host;
};

console.log(getTheUrlData('http://dev14.hollisterco.com.hk/en_HK/home'));