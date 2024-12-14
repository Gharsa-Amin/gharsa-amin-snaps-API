import express from "express";
import cors from "cors";
import photosRouter from "./routes/photos.js";
import tagsRouter from "./routes/tags.js";
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/photos", photosRouter);
app.use("/tags", tagsRouter);

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});
