module.exports.loadHome = (req, res) => {
  res.render('index', {title: 'Express App', message: 'Express Boilerplate set up!'});
};

module.exports.handleMultiForm = (req, res) => {
  //To handle a multipart/form-data with multiple files
  console.log(req.body);    //Show text fields
  console.log(req.files);   //Show array of file fields
  res.redirect('/form/multi');
};

module.exports.handleBasicForm = (req, res) => {
  //Handle basic text field only form
  // req.on('data', (data) => {
  //   console.log(data.toString());
  // });

  // req.on('end', () => {
  //   res.send('Handled');
  // });
  console.log('Request body : ');
  console.log(req.body);
  res.redirect("/");
};

module.exports.handleSingleForm = (req, res) => {
  //Handle a single file upload
  console.log(req.body);    //Show my text field
  console.log(req.file);    //Show my file field
  res.redirect("/form/single");
};

module.exports.handleFormLoad = (req, res) => {
  let formType = req.params.type;
  res.render(formType, {title: 'Form Page'});
}