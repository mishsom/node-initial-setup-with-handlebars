var express = require('express');
var router = express.Router();
const hbs = require('hbs');
/*handle bar helper without parameter */
hbs.registerHelper('getFullYear', () => {
   return new Date().getFullYear();
});
/*handle bar helper with parameter see the template for more example*/
hbs.registerHelper('makeTextLoud', (text) =>{
    return typeof(text) === "string" ? text.toUpperCase() : text;
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
      welcomeMessage: 'hello there'
  });
});

module.exports = router;
