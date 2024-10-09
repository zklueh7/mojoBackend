"use strict";

const db = require("../db");
const bcrypt = require("bcrypt");
const { sqlForPartialUpdate } = require("../helpers/sql");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");

/** Related functions for users. */

class Test {

  /** Add new test data
   *
   * Returns { name, foodType, toppings }
   **/

  static async add(
      { name, toppings, foodType }) {
        console.log(name);
    const result = await db.query(
          `INSERT INTO test
           (name,
            toppings,
            food_type)
           VALUES ($1, $2, $3)
           RETURNING name, toppings, food_type AS "foodType"`,
        [
          name,
          toppings,
          foodType
        ],
    );

    const test = result.rows[0];

    return test;
  }

  /** Find all users.
   *
   * Returns [{ username, first_name, last_name, email, looking_for_partners, climbing_type, experience_level, picture_url }, ...]
   **/

  static async findAll() {
    const result = await db.query(
          `SELECT name,
              food_type AS "foodType",
              toppings 
          FROM test
          ORDER BY name`,
    );

    return result.rows;
  }

  /** Given a username, return data about user.
   *
   * Returns { username, first_name, last_name, looking_for_partners, climbing_type, experience_level, picture_url }
   *
   * Throws NotFoundError if user not found.
   **/

  static async get(username) {
    const userRes = await db.query(
          `SELECT username,
                  password,
                  first_name AS "firstName",
                  last_name AS "lastName",
                  email
           FROM users
           WHERE username = $1`,
        [username],
    );

    const user = userRes.rows[0];

    if (!user) throw new NotFoundError(`No user: ${username}`);

    return user;
  }

  /** Update user data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain
   * all the fields; this only changes provided ones.
   *
   * Data can include:
   *   { firstName, lastName, password, email }
   *
   * Returns { username, firstName, lastName, email }
   *
   * Throws NotFoundError if not found.
   *
   * WARNING: this function can set a new password.
   * Callers of this function must be certain they have validated inputs to this
   * or a serious security risks are opened.
   */

  static async update(username, data) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, BCRYPT_WORK_FACTOR);
    }

    const { setCols, values } = sqlForPartialUpdate(
        data,
        {
          firstName: "first_name",
          lastName: "last_name",
          email: "email"
        });
    const usernameVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE users 
                      SET ${setCols} 
                      WHERE username = ${usernameVarIdx} 
                      RETURNING username,
                                first_name AS "firstName",
                                last_name AS "lastName",
                                email`;
    const result = await db.query(querySql, [...values, username]);
    const user = result.rows[0];

    if (!user) throw new NotFoundError(`No user: ${username}`);

    delete user.password;
    return user;
  }

  /** Delete given user from database; returns undefined. */

  static async remove(username) {
    let result = await db.query(
          `DELETE
           FROM users
           WHERE username = $1
           RETURNING username`,
        [username],
    );
    const user = result.rows[0];

    if (!user) throw new NotFoundError(`No user: ${username}`);
  }

}


module.exports = Test;
