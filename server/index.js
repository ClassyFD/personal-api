const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      app = express(),
      port = 3000,
      ctrl = require('../controllers/main_ctrl.js');

//USE
app.use(bodyParser.json());
app.use(cors());

//GET
app.get('/api/name', ctrl.getName)
app.get('/api/location', ctrl.getLocation)
app.get('/api/occupations', ctrl.getOccupations)
app.get('/api/occupations/latest', ctrl.getOccupationsLatest)
app.get('/api/hobbies', ctrl.getHobbies)
app.get('/api/hobbies/:type', ctrl.getHobbiesType)
app.get('/api/family', ctrl.getFamily)
app.get('/api/family/:gender', ctrl.getFamilyGender)
app.get('/api/restaurants', ctrl.getRestaurants)
app.get('/api/restaurants/:name', ctrl.getRestaurantsName)
app.get('/api/skills', ctrl.getSkills)
//PUT
app.put('/api/name', ctrl.changeName)
app.put('/api/location', ctrl.changeLocation)

//POST
app.post('/api/hobbies', ctrl.addHobbies)
app.post('/api/occupations', ctrl.addOccupations)
app.post('/api/family', ctrl.addFamily)
app.post('/api/restaurants', ctrl.addRestaurants)
app.post('/api/skills', ctrl.addSkills)


app.listen(port, ()=>console.log(`listening on port ${port}`));