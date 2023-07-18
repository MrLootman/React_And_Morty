import fs from "fs";

export default function uploadController (req, res) {
  if (!req.file) {
    return res.status(404).send("Please, choose a file");
  };

  if (req.file.mimetype !== "image/png") {
    fs.unlinkSync(req.file.path);
    return res.status(403).send("This file hasn't the expected format");
  };

  fs.renameSync(req.file.path, `./public/uploads/${req.file.originalname}`, (err) => {
    if (err) {
      return res.status(400).send("Impossible to rename the file")
    }
  })

  return res.status(200).send("File accepted !");
}