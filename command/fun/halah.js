module.exports = {
	name: "halah",
	alias: ["halah", "hlah", "haah", "hlaah"], 
	category: "fun",
	use: "!halah [teks]", 
	query: "Usage : !halah aku ganteng",
	isSpam: true,
	async run({ msg, conn }, { arg, args, q}) {
        teks = teks.replace(/[e]/g,"a")
        teks = teks.replace(/[o]/g,"a")
        teks = teks.replace(/[u]/g,"a")
        teks = teks.replace(/[E]/g,"A")
        teks = teks.replace(/[O]/g,"A")
        teks = teks.replace(/[U]/g,"A")
	  conn.sendMessage(msg.from, {text: teks})
	}
}