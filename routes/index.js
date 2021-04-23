const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//get route for login page to view your planned vacations
router.get("/yourtrips", (req, res) => {
  res.render("lab/yourtrips.hbs");
});

//after signUP page, this route goes to create a trip page
router.get("/create", (req, res) => {
  res.render("lab/create.hbs");
});

//Get route to show destination page after create page
router.get("/destination", (req, res) => {
  res.render("lab/destination.hbs");
});
//POST route for your trips destination
router.post("/destination/:id", (req, res, next) => {
  //get the id
  const { id } = req.params;

  //get body with the elements to be edited
  const { username, password } = req.body;
  //go to the DB and edit the element
  Trip.findByIdAndUpdate(id, { destination })
    .then((data) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

//Get route to show budget page after destinations page
router.get("/budget", (req, res) => {
  res.render("lab/budget.hbs");
});

//Get route to show timeuntil page after destination page
// this page will ask the user when do they want to take the trip
router.get("/timeuntil", (req, res) => {
  res.render("lab/timeuntil.hbs");
});

//Get route to show length of the vaction (1wk, 2wks. 3wks) after timeuntil page
router.get("/length", (req, res) => {
  res.render("lab/length.hbs");
});

//Get route to show luxury page after length page
//will ask the user the level of luxury they want
router.get("/luxury", (req, res) => {
  res.render("lab/luxury.hbs");
});

//Get route to show total page after luxury page
//this page will show the user the est total cost of the trip
router.get("/total", (req, res) => {
  res.render("lab/total.hbs");
});

//Get route to show pichart page after total page, breaking down the expensies
router.get("/piechart", (req, res) => {
  res.render("lab/piechart.hbs");
});

module.exports = router;
