require('dotenv').config();
const fs = require('node:fs');

function writeJSONToFile(data) {
	fs.writeFile('./output.json', JSON.stringify(data), err => {
		if (err) {
		console.error(err);
		}
	})
}

async function deleteMessage(ctx) {
	try {
		await ctx.deleteMessage(ctx.update.message.messageId);
	} catch(error) {
		console.log(error);
	}
}

module.exports = {
	writeJSONToFile,
	deleteMessage
};
