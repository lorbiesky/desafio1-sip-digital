import multerS3 from "multer-s3";
import aws from "aws-sdk";
import crypto from "crypto";

module.exports = (app) => {
  const storage = () => {
    return multerS3({
      s3: new aws.S3(),
      bucket: app.utils.files.getBucket(), //nome do bucket
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: "public-read",
      key: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
          if (err) cb(err);
          const fileName = `${hash.toString("hex")} - ${file.originalname}`;
          cb(null, fileName);
        });
      },
    });
  };

  const image = (maxSize) => ({
    storage: storage(),
    limits: {
      fileSize: maxSize,
    },
    fileFilter: (req, file, cb) => {
      const allowedMimes = [
        "image/jpg",
        "image/jpeg",
        "image/pjpeg",
        "image/png",
      ];
      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error("invalid file type"));
      }
    },
  });

  return { image };
};
