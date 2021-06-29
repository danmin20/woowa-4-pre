// const http = require("http");

// http
//   .get(process.argv[2], (response) => {
//     response.setEncoding("utf8");
//     response.on("data", console.log);
//     response.on("error", console.error);
//   })
//   .on("error", console.error);

// https request에 대한 응답도 추가하고 싶으면

const http = require("http");
const https = require("https");

const url = process.argv[2];
const prefix = url.substring(0, 8);

if (prefix === "https://") {
  https.get(url, (response) => {
    response.on("data", (data) => {
      console.log(data.toString());
    });
  });
} else {
  http.get(url, (response) => {
    response.on("data", (data) => {
      console.log(data.toString());
    });
  });
}
