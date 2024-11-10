"use strict";

const db = require("../db");
const { sqlForPartialUpdate } = require("../helpers/sql");
const {
  NotFoundError,
} = require("../expressError");



/** Related functions for dogs (owner relinquished). */

class Dog {

  /** Find all dogs.
   *
   * Returns [{ dog_name }, ...]
   **/

  static async findAll() {
    const result = await db.query(
      `SELECT dog_id, dog_name FROM dogs`
    );

    return result.rows;
  }

  /** Given a username, return data about user.
   *
   * Returns { username, first_name, last_name, looking_for_partners, climbing_type, experience_level, picture_url }
   *
   * Throws NotFoundError if user not found.
   **/

  static async find(dog_name) {
    const result = await db.query(
      `SELECT *
           FROM dogs
           WHERE dog_name = $1`,
      [dog_name],
    );

    const dog = result.rows[0];

    if (!dog) throw new NotFoundError(`No dog: ${dog_name}`);

    return dog;
  }

  /** Add new dog data
 *
 * Returns { name, foodType, toppings }
 **/

  static async create(
    { shelter_or_owner,
      owner_first_name,
      owner_last_name,
      owner_st_address,
      owner_city,
      owner_state,
      owner_zip,
      owner_email,
      owner_home_phone,
      owner_cell_phone,
      shelter_name,
      contact_name,
      contact_type,
      contact_method,
      contact_method_details,
      photos,
      dog_name,
      dog_sex,
      dog_age,
      dog_weight,
      dog_color,
      dog_breed,
      rescue_reason,
      intake_type,
      relinquish_reason,
      transportation,
      dog_history,
      dog_bite,
      dog_nip,
      dog_health,
      dog_vet_hist,
      dog_heartworm,
      dog_kids,
      dog_negative,
      dog_fearful,
      dog_negative_deets,
      dog_noises,
      dog_movement,
      dog_tricks,
      dog_adjectives,
      dog_agro_examples,
      dog_improvement,
      dog_location,
      dog_alone,
      dog_crate_time,
      dog_crate_behavior,
      dog_crate_behavior_deets,
      dog_animals,
      attest }) {
    const result = await db.query(
      `INSERT INTO dogs
           (shelter_or_owner,
      owner_first_name,
      owner_last_name,
      owner_st_address,
      owner_city,
      owner_state,
      owner_zip,
      owner_email,
      owner_home_phone,
      owner_cell_phone,
      shelter_name,
      contact_name,
      contact_type,
      contact_method,
      contact_method_details,
      photos,
      dog_name,
      dog_sex,
      dog_age,
      dog_weight,
      dog_color,
      dog_breed,
      rescue_reason,
      intake_type,
      relinquish_reason,
      transportation,
      dog_history,
      dog_bite,
      dog_nip,
      dog_health,
      dog_vet_hist,
      dog_heartworm,
      dog_kids,
      dog_negative,
      dog_fearful,
      dog_negative_deets,
      dog_noises,
      dog_movement,
      dog_tricks,
      dog_adjectives,
      dog_agro_examples,
      dog_improvement,
      dog_location,
      dog_alone,
      dog_crate_time,
      dog_crate_behavior,
      dog_crate_behavior_deets,
      dog_animals,
      attest)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49)
           RETURNING dog_id`,
      [
        shelter_or_owner,
        owner_first_name,
        owner_last_name,
        owner_st_address,
        owner_city,
        owner_state,
        owner_zip,
        owner_email,
        owner_home_phone,
        owner_cell_phone,
        shelter_name,
        contact_name,
        contact_type,
        contact_method,
        contact_method_details,
        photos,
        dog_name,
        dog_sex,
        dog_age,
        dog_weight,
        dog_color,
        dog_breed,
        rescue_reason,
        intake_type,
        relinquish_reason,
        transportation,
        dog_history,
        dog_bite,
        dog_nip,
        dog_health,
        dog_vet_hist,
        dog_heartworm,
        dog_kids,
        dog_negative,
        dog_fearful,
        dog_negative_deets,
        dog_noises,
        dog_movement,
        dog_tricks,
        dog_adjectives,
        dog_agro_examples,
        dog_improvement,
        dog_location,
        dog_alone,
        dog_crate_time,
        dog_crate_behavior,
        dog_crate_behavior_deets,
        dog_animals,
        attest
      ],
    );

    const dog = result.rows[0];

    return dog;
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

   static async remove(dog_id) {
     let result = await db.query(
           `DELETE
            FROM dogs
            WHERE dog_id = $1
            RETURNING dog_id`,
         [dog_id],
     );
     const dog = result.rows[0];

     if (!dog) throw new NotFoundError(`No dog with id: ${dog_id}`);
   }

}


module.exports = Dog;
