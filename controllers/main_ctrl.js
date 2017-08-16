let user  = require('../server/user.js')
let skills = require('../server/skills.js')
module.exports = {
//GET REQUESTS
  getName: (req, res)=>{
    res.status(200).send(user.name)
 },
  getLocation: (req, res)=>{
    res.status(200).send(user.location)
  },
  getOccupations: (req, res)=>{
    res.status(200).send(user.occupations)
  },
  getOccupationsLatest: (req, res)=>{
    res.status(200).send(user.occupations[user.occupations.length-1])
  },
  getHobbies: (req, res)=>{
    res.status(200).send(user.hobbies)
  },
  getHobbiesType: (req, res)=>{
    let data = user.hobbies.filter(e=>{
      return e.type === req.params.type 
    })
    res.status(200).send(data)
  },
  getFamily: (req, res)=>{
    res.status(200).send(user.family)
  },
  getFamilyGender: (req, res)=>{
    let data = user.family.filter(e=>{
      return e.gender === req.params.gender
    })
    res.status(200).send(data)
  },
  getRestaurants: (req, res)=>{
    res.status(200).send(user.restaurants)
  },
  getRestaurantsName: (req, res)=>{
    let data = user.restaurants.filter(e=>{
      return e.name === req.params.name
    })
    res.status(200).send(data)
  },
  getSkills: (req, res)=>{
    let data = skills;
    if (req.query.experience){
      data = data.filter(e=>{
        return e.experience === req.query.experience
      })
    } 
    res.status(200).send(data)
  },
  //PUT REQUESTS
  changeName: (req, res)=>{
    user.name = req.body.name
    res.status(200).send(user)
  },
  changeLocation: (req, res)=>{
    user.location = req.body.location
    res.status(200).send(user)
  },
  //POST REQUESTS
  addHobbies: (req, res)=>{
    if (req.body.name && req.body.type){
      user.hobbies.push(req.body)
    }
    res.status(200).send(user)
  },
  addOccupations: (req, res)=>{
    user.occupations.push(req.body.occupations)
    res.status(200).send(user)
  },
  addFamily: (req, res)=>{
    if (req.body.name && req.body.relation && req.body.gender){
      user.family.push(req.body)
      res.status(200).send(user)
    }
  },
  addRestaurants: (req, res)=>{
    if (req.body.name && req.body.type && req.body.rating){
      user.restaurants.push(req.body)
      res.status(200).send(user)
    }
  },
  addSkills: (req, res)=>{
    let id = skills.length+1 
    skills.push(req.body)
    req.body.id = id
    res.status(200).send(skills)
  },
}