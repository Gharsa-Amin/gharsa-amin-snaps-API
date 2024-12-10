import express from "express";
import fs from "fs";
const router = express.Router();

const tagsArray = () => {
	const tagsFile = fs.readFileSync("./data/tags.json");
	const tagsParsing = JSON.parse(tagsFile);
	return tagsParsing;
};

router.get("/", (req, res) => {
	const tags = tagsArray();
	res.json(tags);
});

export default router;
