/**
 * Define a function that concatenates several strings
 * – Function should take a separator and list of arguments
 * – Function should return list of arguments concatenated and separated by separator
 */

 let concatString = (seperator, ...args) => args.join(seperator);

 console.log(concatString('-','Hello','world','!'));