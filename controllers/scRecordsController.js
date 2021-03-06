const db = require("../models");

module.exports = {

  findAll: function () {
    return db.SCRecords
      .find({})
      .populate({
        path: 'encounters',
        options: {
          sort: {date: 'desc'}
        },
           populate: {
          path: 'officer'
        }
       
      })
  },

  findById: function (id) {
    return db.SCRecords
      .find({_id: id})
      .populate({
        path: 'encounters',
        options: {
          sort: {date: 'desc'}
        },
           populate: {
          path: 'officer'
        }
       
      })
  },

  findByTag: function (tag) {
    return db.SCRecords
      .find({tag: tag})
      .populate({
        path: 'encounters',
        options: {
          sort: {date: 'desc'}
        },
           populate: {
          path: 'officer'
        }
       
      })
  },

  findTags: function (tag) {
    return db.SCRecords
    .where({ tag: tag})
  },


  findByState: function (state) {
    return db.SCRecords
    .find({})
    .where({state: state})
  },

  create: function (data) {
    return db.SCRecords
      .create(data)
  },
  createMany: function (data) {
    console.log("in controller")
    console.log(data)
    return db.SCRecords
      .insertMany(data)
  },
  update: function (id, data) {
    return db.SCRecords
      .findOneAndUpdate(id, data, {upsert: true})
  },
  remove: function (id) {
    return db.SCRecords
    .findOneAndRemove({_id: id})
  },

  removeAll: function () {
    return db.SCRecords
    .deleteMany({})
  },

};















  // findAll: function (req, res) {
  //   db.Advertisements
  //     .find({})
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },


  // findById: function (req, res) {
  //   db.Advertisements
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  
  // create: function (req, res) {
  //   console.log("this is the data from the create ad");
  //   console.log(req.body);
  //   db.Advertisements
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function (req, res) {
  //   db.Advertisements
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function (req, res) {
  //   db.Advertisements
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // this function finds an ad to show on load
  // findAPageLoadAd: function (req, res) {

  //   db.Advertisements
  //     .find(req.query)
  //     .then(dbModel => {

  //       let value = newAd.determineAd(dbModel)
  //       res.json(value)
  //     })
  //     .catch(err => res.status(422).json(err));
  // },

  // // this function finds an ad specific to user searches
  // findSelectedAd: function (req, res) {

  //   db.Advertisements
  //     .find({})
  //     .then(dbModel => {

  //       db.Searches
  //         .find({})
  //         .then(allSearches => {
  //           let value = adLogic.determineAd(dbModel, allSearches)
  //           res.json(value)
  //         })
  //     })
  //     .catch(err => res.status(422).json(err));

  // },


  

