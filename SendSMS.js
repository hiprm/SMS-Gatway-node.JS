const debug = require("debug")("app:SendSMS");
let axios = require("axios");

async function SendSMS(data) {
  const requestData = {
    user_id: process.env.USER_ID,
    api_key: process.env.API_KEY,
    sender_id: process.env.SENDER_ID,
    to: data.phone_number,
    message: data.message,
  };

  if(requestData.to[0] === "0") {
    requestData.to = "94" + requestData.to.slice(1);
  } else if(requestData.to.toString()[0] !== "9" && requestData.to.toString()[1] !== "4"){
    requestData.to =  "94" + requestData.to;
  }

  let result = await axios
    .post("https://app.notify.lk/api/v1/send", requestData)
    .then((response) => {
      // console.log("Response:", response.data);
      debug("Response:", response.data);
    })
    .catch((error) => {
      // console.error("Error:", error.response.data);
      debug("Error:", error.response.data);
    });

  return result;
}

module.exports = SendSMS;
