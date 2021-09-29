import React from "react";
var axios = require("axios").default;

export default function Games() {
  let response = [];
  var options = {
    method: "GET",
    url: "https://whatoplay.p.rapidapi.com/platform",
    params: { platform: "pc", count: "10" },
    headers: {
      "x-rapidapi-host": "whatoplay.p.rapidapi.com",
      "x-rapidapi-key": "4ee5b59d12msh903605515e7a564p1a6d32jsnd4cc21b6c460",
    },
  };

  axios
    .request(options)
    .then(function (data) {
      for (var i = 0; i < data.data.pc.data.length; i++) {
        var gameName = data.data.pc.data[i].game_name;
        gameName = response;
      }
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <>
      <div>
        <h1>{response}</h1>
      </div>
    </>
  );
}
