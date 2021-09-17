// function urlParser(s) {
//   var mArr = [];
//   var pArr = [];
//   var m = s.split("#")[1],
//     p = "";
//   if (m.indexOf("?") > -1) {
//     var temp = m.split("?")[0];
//     p = m.split("?")[1];
//     mArr = temp.split("/");
//     if (mArr[mArr.length - 1] === "") {
//       mArr.pop();
//     }
//   } else {
//     p = m;
//   }

//   pArr = p.split("&");
//   var str = "[";
//   for (var i = 0, l = mArr.length; i < l; i++) {
//     str += "\"" + mArr[i] + "\",";
//   }
//   str += "{";
//   for (var i = 0, l = pArr.length; i < l; i++) {
//     str += "\"" + pArr[i].split("=").join("\":\"") + "\",";
//   }
//   str += "}]";
//   return str.replace(",}]", "}]");
// }

// urlParser()
console.log(123)