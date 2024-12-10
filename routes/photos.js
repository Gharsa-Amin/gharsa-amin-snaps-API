import { timeStamp } from "console";
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
	res.status(200).send("Successful");
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

router.get("/:id/comments", (req, res) => {
	// create a get request with the end point identified followed by a req, res function
	const { id } = req.params; //use params for id
	const photos = photosArray(); //calling photosArray which has fs readFileSync of the photo.js file
	const individualComment = photos.find((photo) => photo.id === id); //running a find function on photo id

	if (!individualComment) {
		return res.status(404).send("Photo not found");
	}
	const filteredComments = individualComment.comments.map((comment) => ({
		//filtering the individual comments using .map function to identify which variables within the object for the specific endpoint should be used.
		id: comment.id,
		name: comment.name,
		comment: comment.comment,
		timestamp: comment.timestamp,
	}));

	// Send the filtered comments as the response
	res.json(filteredComments); //calling the filteredComment which will show up when the response is sent upon the API end point being called.
});

router.post("/:id/comments"), (req, res) => {};

export default router;
