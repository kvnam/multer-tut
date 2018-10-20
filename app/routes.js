const controller = require('./controller');
const multer = require('multer');
var upload = multer();
var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'tmp/');
  },
  filename: function(req, file, cb){
    cb(null, file.originalname + '-' + (new Date()).getDate());
  }
})
var uploadFiles = multer({storage: storage});

module.exports = app => {
  app.get('/', controller.loadHome);
  app.post('/multiform', uploadFiles.array('file1', 2), controller.handleMultiForm);
  app.post('/basicform', upload.any(), controller.handleBasicForm);
  app.post('/singleform', uploadFiles.single('file1'), controller.handleSingleForm);
  app.get('/form/:type', controller.handleFormLoad)
}