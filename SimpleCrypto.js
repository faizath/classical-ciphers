/* SimpleCrypto.js
*  Author        : faizath (https://github.com/faizath)
*  License (MIT) : https://github.com/faizath/SimpleCrypto/blob/main/LICENSE
*  Source        : https://github.com/faizath/SimpleCrypto
*/
window.SimpleCrypto = (function(){
  "use strict";
  var functions = {};
  function num(q) {
    if (typeof q !== "number") {
        throw new Error("Key must be a number !");
        return;
    }
  }
  function splitNChars(txt, num) {
    var result = [];
    for (var i = 0; i < txt.length; i += num) {
      result.push(txt.substr(i, num));
    }
    return result;
  }
  function upint(int) {
      if (parseInt((int).toString().split("")[0]) !== int) {
          return parseInt((int).toString().split("")[0]) + 1;
      } else {
          return int;
      }
  }
  function permutate(txt) {
    var num = [], result = [], characters = "abcdefghijklmnopqrstuvwxyz";
    var str = txt.replaceAll(" ", "").toLowerCase().split("");
    for (var i in str) {
        if (characters.indexOf(str[i]) === -1) {return "";} else {
            num[num.length] = (characters.indexOf(str[i]) + 1).toString();
        }
    }
    for (var z in num) {
        result[num.indexOf(Math.min.apply(Math, num).toString())] = parseInt(z) + 1;
        num[num.indexOf(Math.min.apply(Math, num).toString())] = "99";
    }
    return result;
  }
  functions.ROT13 = function(str){
    var result = "";
    const string = str.replaceAll(" ", "").toLowerCase();
    const characters = "abcdefghijklm nopqrstuvwxyz".split(" ");
    for (var i in string.split("")) {
      if (characters.join("").indexOf(string.split("")[i]) === -1) {return "";}
      if (characters[0].indexOf(string.split("")[i]) !== -1) {
        result += characters[1].split("")[characters[0].indexOf(string.split("")[i])];
      } else {
        result += characters[0].split("")[characters[1].indexOf(string.split("")[i])];
      }
    }
    return result;
  };
  functions.ColumnarTransposition = {
    "encrypt":function(str, key){
      str = str.replaceAll(" ", "").replaceAll(".", "").toLowerCase();
      key = key.replaceAll(" ", "").replaceAll(".", "").toLowerCase();
      const splitted = splitNChars(str, key.length);
      var column = "", result = [], permutation = permutate(key);
      for (var i = 0; i < key.length; i++) {
        for (var z in splitted) {
            if (splitted[z].split("")[i] !== undefined) {
                column += splitted[z].split("")[i];
            }
        }
        column += " ";
      }
      const columned = column.slice(0,-1).split(" ");
      for (var x in columned) {
          result[result.length] = columned[permutation.indexOf(Math.min.apply(Math, permutation))]
          permutation[permutation.indexOf(Math.min.apply(Math, permutation))] = 99;
      }
      return result.join(" ");
    },
    "decrypt":function(str, key){
      str = str.toLowerCase().split(" ");
      key = permutate(key.replaceAll(" ", "").replaceAll(".", "").toLowerCase());
      if (str.length !== key.length) {throw new Error("Invalid Key !"); return;}
      var column = [], result = "";
      for (var y in key) {
          column[column.length] = str[key[y] - 1];
      }
      for (var i = 0; i < column.length; i++) {
          for (var z in column) {
            if (column[z].split("")[i] !== undefined) {
                result += column[z].split("")[i];
            }
          }
      }
      return result;
    }};
  functions.Vigenere = {
    "encrypt":function(str, key){
      var result = "";
      const string = str.replaceAll(" ", "").toLowerCase(), keys = key.replaceAll(" ", "").toLowerCase();
      const characters = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
      for (var i in str) {
        result += characters.split("")[characters.indexOf(string.split("")[i]) + characters.indexOf(keys.split("")[i])];
      }
      return result;
    },
    "decrypt":function(str, key){
      var result = "";
      const string = str.replaceAll(" ", "").toLowerCase(), keys = key.replaceAll(" ", "").toLowerCase();
      const characters = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
      for (var i in str) {
        if ((characters.indexOf(string.split("")[i]) - characters.indexOf(keys.split("")[i])) < 0) {
            result += characters.slice(characters.indexOf(string.split("")[i]) - characters.indexOf(keys.split("")[i]), characters.indexOf(string.split("")[i]) - characters.indexOf(keys.split("")[i]) + 1);
        } else {
            result += characters.split("")[characters.indexOf(string.split("")[i]) - characters.indexOf(keys.split("")[i])];
        }
      }
      return result;
    }};
  return functions;
}).call(this);
