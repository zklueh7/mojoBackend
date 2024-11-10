"use strict";

/** Routes for messages. */

const express = require("express");
const Dog = require("../models/dog");

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

/** DELETE /[dog_id]  =>  { deleted: username }
 *
 * Authorization required: admin or same-user-as-:username
 **/

router.delete("/:dog_id", async function (req, res, next) {
  try {
    await Dog.remove(req.params.dog_id);
    return res.json({ deleted: req.params.dog_id });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
