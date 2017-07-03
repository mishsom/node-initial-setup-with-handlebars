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
router.get('/', function(req, res) {
  res.render('index', { title: 'Express',
      welcomeMessage: 'hello there'
  });
});
var connectDataBase = (data, data2) => {
    console.log("saving data to database")
};
router.get('/dummyApiForTest', (req, res) => {
    connectDataBase("data", "apple");
    res.send({
        name: 'Soumitra Mishra',
        age: '28',
        likes: ['flute', 'guitar', 'coding']
    })
});
module.exports = router;
