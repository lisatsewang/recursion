// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // JSON string to be returned
  var resultArray = [];

  // check for number, result: "5"
  if (typeof obj === "number") { return obj.toString(); }

  // check for string, result: ""string""
  if (typeof obj === "string") { return ('"' + obj + '"'); }

  // check for boolean, result: "true"
  if (typeof obj === "boolean") { return obj.toString();; }

  // check for null, result: "null", "{"null":null}"
  if (obj === null) { return "null"; }

  // if value === undefined or function, do nothing

  // check for array, result: "[1, "s"]"
  if (Array.isArray(obj)) {

    for (var i = 0, arrayLength = obj.length; i < arrayLength; i++) {

      resultArray.push(stringifyJSON(obj[i])); 
    }

    return "[" + resultArray + "]"; 
  }

  // check for object
  if (typeof obj === "object") {

    for (var key in obj) {
      
      // only push if object key has a defined value
      if ((obj[key] !== undefined) && (key !== "functions")) {

        var keyString = '"' + key + '"';
        resultArray.push(keyString + ":" + stringifyJSON(obj[key]));
      }
    }

    return "{" + resultArray + "}";
  }
}; 
