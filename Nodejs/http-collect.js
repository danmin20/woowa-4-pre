// const http = require("http");
// const bl = require("bl");

// http.get(process.argv[2], (response) => {
//   response.pipe(
//     bl((err, data) => {
//       if (err) {
//         return console.error(err);
//       }
//       data = data.toString();
//       console.log(data.length);
//       console.log(data);
//     })
//   );
// });

// buffer list 모듈 안 쓰고 싶으면

const http = require("http");
const url = process.argv[2];
let body = "";

http.get(url, (response) => {
  response.on("data", (chunk) => {
    body += chunk;
  });
  response.on("end", () => {
    console.log(body.length);
    console.log(body);
  });
});
