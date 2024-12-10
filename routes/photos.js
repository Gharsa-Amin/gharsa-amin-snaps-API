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

router.get("/:id", (req, res) => {
	console.log(req.params);
	const { id } = req.params;
	const photos = photosArray();
	const individualPhoto = photos.find((photo) => photo.id === id);

	if (!individualPhoto) {
		return res.status(404).send("Photo not found");
	}

	const filteredPhoto = {
		id: individualPhoto.id,
		photo: individualPhoto.photo,
		photoDescription: individualPhoto.photoDescription,
		photographer: individualPhoto.photographer,
		likes: individualPhoto.likes,
		timestamp: individualPhoto.timestamp,
		tags: individualPhoto.tags,
	};

	res.json(filteredPhoto);
});

export default router;
