"use strict";

/** Routes for messages. */

const express = require("express");
const Dog = require("../models/dog_owner_rq");

const router = express.Router();

/** GET / => { dogs: [ {dogInfo}, ... ] }
 *
 * Returns list of all dogs.
 *
 **/

router.get("/", async function (req, res, next) {
  try {
    const dogs = await Dog.findAll();
    return res.json({ dogs });
  } catch (err) {
    return next(err);
  }
});

/** GET /[id] => { message }
 *
 * Returns { name, latitude, longitude, description, pictureUrl }
 *
 **/

router.get("/:dog_name", async function (req, res, next) {
  try {
    const dog = await Dog.find(req.params.dog_name);
    return res.json({ dog });
  } catch (err) {
    return next(err);
  }
});

/** POST / { dog }
 *
 * Returns { dog }
 *
 **/

router.post("/", async function (req, res, next) {
  try {
    const dog = await Dog.create(req.body);
    console.log(dog);
    return res.status(201).json({ dog });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
