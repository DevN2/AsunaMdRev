const { convertTime } = require("../../lib");

module.exports = {
	name: "ahhhhhhh",
	category: "info",
	type: "changelog",
	desc: "ahhhh yametteh",
	isSpam: true,
	async run({ msg, conn }, { map }) {
		await msg.reply(convertTime(map.uptime.getTime()));
	},
};
