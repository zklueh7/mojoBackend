"use strict";

/** Routes for users. */

const express = require("express");

const { BadRequestError } = require("../expressError");
const Test = require("../models/test");
const userNewSchema = require("../schemas/userNew.json");
const userUpdateSchema = require("../schemas/userUpdate.json");

const router = express.Router();


/** POST / { test }  => { user }
 *
 * Adds a new set of test data. 
 *
 * This returns the newly created test data:
 *  {user: { name, firstName, lastName, email, isAdmin }, token }
 *
 * Authorization required: admin
 **/

router.post("/", async function (req, res, next) {
  try {
    // const validator = jsonschema.validate(req.body, userNewSchema);
    // if (!validator.valid) {
    //   const errs = validator.errors.map(e => e.stack);
    //   throw new BadRequestError(errs);
    // }
    const test = await Test.add(req.body);
    return res.status(201).json({ test });
  } catch (err) {
    return next(err);
  }
});


/** GET / => { tests: [ {name, foodType, toppings }, ... ] }
 *
 * Returns list of all tests.
 **/

router.get("/", async function (req, res, next) {
  try {
    const test = await Test.findAll();
    return res.json({ test });
  } catch (err) {
    return next(err);
  }
});


/** GET /[username] => { user }
 *
 * Returns { username, firstName, lastName, isAdmin, jobs }
 *   where jobs is { id, title, companyHandle, companyName, state }
 *
 * Authorization required: admin or same user-as-:username
 **/

// router.get("/:username", ensureCorrectUserOrAdmin, async function (req, res, next) {
//   try {
//     const user = await User.get(req.params.username);
//     return res.json({ user });
//   } catch (err) {
//     return next(err);
//   }
// });


/** PATCH /[username] { user } => { user }
 *
 * Data can include:
 *   { firstName, lastName, password, email }
 *
 * Returns { username, firstName, lastName, email, isAdmin }
 *
 * Authorization required: admin or same-user-as-:username
 **/

// router.patch("/:username", ensureCorrectUserOrAdmin, async function (req, res, next) {
//   try {
//     const validator = jsonschema.validate(req.body, userUpdateSchema);
//     if (!validator.valid) {
//       const errs = validator.errors.map(e => e.stack);
//       throw new BadRequestError(errs);
//     }

//     const user = await User.update(req.params.username, req.body);
//     return res.json({ user });
//   } catch (err) {
//     return next(err);
//   }
// });


/** DELETE /[username]  =>  { deleted: username }
 *
 * Authorization required: admin or same-user-as-:username
 **/

// router.delete("/:username", ensureCorrectUser, async function (req, res, next) {
//   try {
//     await User.remove(req.params.username);
//     return res.json({ deleted: req.params.username });
//   } catch (err) {
//     return next(err);
//   }
// });


module.exports = router;
