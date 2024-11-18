"use strict";

const db = require("../db");
const { sqlForPartialUpdate } = require("../helpers/sql");
const {
    NotFoundError,
} = require("../expressError");



/** Related functions for dogs (owner relinquished). */

class Volunteer {

    /** Find all volunteers.
     *
     * Returns [{ dog_name }, ...]
     **/

    static async findAll() {
        const result = await db.query(
            `SELECT volunteer_id, volunteer_name FROM volunteers`
        );

        return result.rows;
    }

    /** Given a username, return data about user.
     *
     * Returns { username, first_name, last_name, looking_for_partners, climbing_type, experience_level, picture_url }
     *
     * Throws NotFoundError if user not found.
     **/

    //   static async find(volunteer_name) {
    //     const result = await db.query(
    //       `SELECT *
    //            FROM dogs
    //            WHERE dog_name = $1`,
    //       [dog_name],
    //     );

    //     const dog = result.rows[0];

    //     if (!dog) throw new NotFoundError(`No dog: ${dog_name}`);

    //     return dog;
    //   }

    /** Add new dog data
   *
   * Returns { name, foodType, toppings }
   **/

    static async create(
        { name,
            address,
            phone,
            email,
            fence,
            dogs,
            cats,
            animals,
            children,
            overnight,
            restrictions,
            pickup,
            vehicle,
            crates,
            distance,
            evaluate,
            home_visits,
            events }) {
        const result = await db.query(
            `INSERT INTO volunteers
                (name,
                    address,
                    phone,
                    email,
                    fence,
                    dogs,
                    cats,
                    animals,
                    children,
                    overnight,
                    restrictions,
                    pickup,
                    vehicle,
                    crates,
                    distance,
                    evaluate,
                    home_visits,
                    events)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
           RETURNING name`,
            [
                name,
                address,
                phone,
                email,
                fence,
                dogs,
                cats,
                animals,
                children,
                overnight,
                restrictions,
                pickup,
                vehicle,
                crates,
                distance,
                evaluate,
                home_visits,
                events
            ],
        );

        const volunteer = result.rows[0];

        return volunteer;
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

    // static async update(username, data) {
    //   if (data.password) {
    //     data.password = await bcrypt.hash(data.password, BCRYPT_WORK_FACTOR);
    //   }

    //   const { setCols, values } = sqlForPartialUpdate(
    //       data,
    //       {
    //         firstName: "first_name",
    //         lastName: "last_name",
    //         email: "email"
    //       });
    //   const usernameVarIdx = "$" + (values.length + 1);

    //   const querySql = `UPDATE users 
    //                     SET ${setCols} 
    //                     WHERE username = ${usernameVarIdx} 
    //                     RETURNING username,
    //                               first_name AS "firstName",
    //                               last_name AS "lastName",
    //                               email`;
    //   const result = await db.query(querySql, [...values, username]);
    //   const user = result.rows[0];

    //   if (!user) throw new NotFoundError(`No user: ${username}`);

    //   delete user.password;
    //   return user;
    // }

    /** Delete given user from database; returns undefined. */

    //    static async remove(dog_id) {
    //      let result = await db.query(
    //            `DELETE
    //             FROM dogs
    //             WHERE dog_id = $1
    //             RETURNING dog_id`,
    //          [dog_id],
    //      );
    //      const dog = result.rows[0];

    //      if (!dog) throw new NotFoundError(`No dog with id: ${dog_id}`);
    //    }

}


module.exports = Volunteer;
