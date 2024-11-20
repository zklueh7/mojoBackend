"use strict";

/** Routes for volunteers. */

const express = require("express");
const Volunteer = require("../models/volunteer");

const router = express.Router();

/** GET / => { dogs: [ {dogInfo}, ... ] }
 *
 * Returns list of all volunteers.
 *
 **/

router.get("/", async function (req, res, next) {
  try {
    const volunteers = await Volunteer.findAll();
    return res.json({ volunteers });
  } catch (err) {
    return next(err);
  }
});

/** GET /[id] => { message }
 *
 * Returns { name, latitude, longitude, description, pictureUrl }
 *
 **/

router.get("/:volunteer_name", async function (req, res, next) {
  try {
    const volunteer = await Volunteer.find(req.params.volunteer_name);
    return res.json({ volunteer });
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
    const volunteer = await Volunteer.create(req.body);
    console.log(volunteer);
    return res.status(201).json({ volunteer });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /[dog_id]  =>  { deleted: username }
 *
 * Authorization required: admin or same-user-as-:username
 **/

router.delete("/:volunteer_id", async function (req, res, next) {
  try {
    await Volunteer.remove(req.params.volunteer_id);
    return res.json({ deleted: req.params.volunteer_id });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
