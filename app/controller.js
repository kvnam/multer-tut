module.exports.loadHome = (req, res) => {
  res.render('index', {title: 'Express App', message: 'Express Boilerplate set up!'});
};

module.exports.handleMultiForm = (req, res) => {
  //To handle a multipart/form-data with multiple files
  console.log(req.body);
  console.log(req.files);
  res.redirect("/form/multi");
};

module.exports.handleBasicForm = (req, res) => {
  // req.on('data', (data) => {
  //   console.log(data.toString());
  // });

  // req.on('end', () => {
  //   res.send('ok');
  // });
  console.log(req.body);
};

module.exports.handleSingleForm = (req, res) => {
  //Handle a single file upload
  console.log(req.body);
  console.log(req.file);
  res.redirect("/form/single");
};

module.exports.handleFormLoad = (req, res) => {
  let formType = req.params.type;
  res.render(formType, {title: 'Form Page', message: 'Submit ' + formType});
}