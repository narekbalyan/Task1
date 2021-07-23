const fs = require("fs");
const path = require("path");

const filePath = path.join("C:", "Users", "User", "Desktop", "Epam", "Node-lessons", "addresses.csv");
const dataJSON = [];
const headings = ["firstName", "lastName", "address", "district", "state", "postalCode"];
const filePathJSON = path.join(path.dirname(filePath), path.basename(filePath, path.extname(filePath)) + ".json");
const space = "  ";

fs.readFile(filePath, (err, data) => {
	if(err) {
		console.error(err);
	}

	const dataArr = data.toString().split(/[,\n]/);
	let obj = {};

	for (let i = 0; i < dataArr.length; i++) {
		if(i >= 6) {
			obj[headings[i % 6]] = dataArr[i];
		} else {
			obj[headings[i]] = dataArr[i];
		}
		
		if(Object.keys(obj).length === 6) {
			dataJSON.push(obj);
			obj = {};
		}
	}
	
	fs.writeFile(filePathJSON, JSON.stringify(dataJSON), () => {
		console.log("Conversion completed")
	})
});