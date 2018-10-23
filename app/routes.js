const controller = require('./controller');
const multer = require('multer');

const upload = multer();

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb){
    cb(null, file.originalname + '-' + (new Date()).getDate());
  }
});
const uploadSingle = multer({storage: storage});

module.exports = app => {
  app.get('/', controller.loadHome);
  app.post('/multiform', uploadSingle.fields([{name: 'file1', maxCount: 1}, {name: 'file2', maxCount: 1}]), controller.handleMultiForm);
  app.post('/basicform', upload.none(), controller.handleBasicForm);
  app.post('/singleform', uploadSingle.single('file1'), controller.handleSingleForm);
  app.get('/form/:type', controller.handleFormLoad)
}