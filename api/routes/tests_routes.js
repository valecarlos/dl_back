const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads');
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true);
  } else{
    // reject a file
    cb(new Error('File type not supported'), false);
  }
}
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
})


module.exports = function(app, db) {
  app.post('/tests/', upload.single('testImage'),(req, res, next) => {
    console.log(req.file)
    res.status(200).json({
      'filePath': req.file.path
    })
  });
};