const fs = require("fs");
module.exports = {
  config:{
	name: "sagor2",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("🥳")==0 || body.indexOf("😳")==0 || body.indexOf("😕")==0) {
		var msg = {
				body: "এই শহরে সবারই কষ্ট আছে\nকেউ কেউ প্রকাশ করে আর কেউ হাসির মাধ্যমে উড়িয়ে দেয়\n\nSAGOR",
				attachment: fs.createReadStream(__dirname + `/Joy/joy11.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
