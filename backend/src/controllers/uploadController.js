import fs from "fs";

const uploadController = (req, res, next) => {
  fs.rename(
    req.file.path,
    `./public/uploads/${req.file.originalname}`,
    (err) => {
      if (err) {
        console.log(err);
        res.status(400).send("Error while uploading");
      } else {
        res.status(203).json({
          success: true,
          message: "Upload successfull",
          url: `http://localhost:5000/public/uploads/${req.file.originalname}`
        })
      }
    }
  )
}

export { uploadController };