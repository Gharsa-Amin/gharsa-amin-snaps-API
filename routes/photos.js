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
    const {id} = req.params
    const photosFile = fs.readFileSync("./data/photos.json");
	const photosParsing = JSON.parse(photosFile); 
    const individualPhoto = photos.find((photo)) => photo
}

router.get('/:id' ,(request, response) => {
    console.log(request.params);
    const { id } = request.params

    // reading file from file system 
    const shoesFile = fs.readFileSync('./data/shoes.json');
    const shoes = JSON.parse(shoesFile);

    const individualShoe = shoes.find((shoe) => shoe.id === id);

    if(!individualShoe) {
        response.status(404).send('shoe not found')
        return;
    }


    response.json(individualShoe)
})






export default router;
