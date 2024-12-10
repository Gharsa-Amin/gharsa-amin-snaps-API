import express from "express";
import fs from "fs";
const router = express.Router();
// import { v4 as uuidv4 } from "uuid";

const photosArray = () => {
	const photosFile = fs.readFileSync("./data/photos.json");
	const photosParsing = JSON.parse(photosFile);
	return photosParsing;
};

router.get("/", (req, res) => {
	const photos = photosArray();
	res.json(photos);
});

export default router;
