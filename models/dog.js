"use strict";

const db = require("../db");
const { NotFoundError} = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");


/** Related functions for companies. */

class Message {
  /** Create a message (from data), update db, return new message data.
   *
   * data should be { message_text, area, from_user, time_posted }
   *
   * Returns { id, message_text, area, from_user, time_posted }
   **/

  static async create(data) {
    const result = await db.query(
          `INSERT INTO messages (message_text,
                             area,
                             from_user)
           VALUES ($1, $2, $3)
           RETURNING id, message_text AS "messageText", area, from_user AS "fromUser", time_posted AS "timePosted"`,
        [
          data.messageText,
          data.area,
          data.fromUser,
        ]);
    let message = result.rows[0];

    return message;
  }

  /** Find all messages for an area.
   *
   * searchFilters (all optional):
   * - area
   *
   * Returns [{ id, messageText, area, fromUser, timePosted }, ...]
   * */

  static async findAll(searchFilters = {}) {
    console.log("searchFilters", searchFilters);
    const { area } = searchFilters;
    const messagesRes = await db.query(
                `SELECT m.id,
                        m.message_text AS "messageText",
                        m.area,
                        m.from_user AS "fromUser",
                        m.time_posted AS "timePosted",
                        u.picture_url AS "pictureUrl"
                FROM messages m
                LEFT JOIN users AS u ON u.username = m.from_user
                WHERE area = $1
                ORDER BY m.time_posted ASC;`, [area]);

    return messagesRes.rows; 
  }

  /** Given a message id, return data about message.
   *
   * Returns { id, messageText, area, fromUser, timePosted }
   *   where area is { name, latitude, longitude, description, pictureUrl }
   *
   * Throws NotFoundError if not found.
   **/

  static async get(id) {
    const messageRes = await db.query(
          `SELECT id,
                  message_text AS "messageText",
                  area,
                  from_user AS "fromUser",
                  time_posted AS "timePosted"
           FROM messages
           WHERE id = $1`, [id]);

    const message = messageRes.rows[0];

    if (!message) throw new NotFoundError(`No message: ${id}`);

    const areasRes = await db.query(
          `SELECT name,
                  latitude,
                  longitude,
                  description,
                  picture_url AS "pictureUrl"
           FROM areas
           WHERE handle = $1`, [message.area]);

    message.area = areasRes.rows[0];
        
    return message;
  }

  /** Update message data with `data`.
   *
   * Edit the text of the message
   *
   * Data can include: { message_text }
   *
   * Returns { id, message_text, area, from_user, time_posted }
   *
   * Throws NotFoundError if not found.
   */

  static async update(id, data) {
    const { setCols, values } = sqlForPartialUpdate(
        data,
        {});
    const idVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE messages 
                      SET ${setCols} 
                      WHERE id = ${idVarIdx} 
                      RETURNING id, 
                                message_text AS "messageText", 
                                area, 
                                from_user AS "fromUser",
                                company_handle AS "companyHandle"`;
    const result = await db.query(querySql, [...values, id]);
    const message = result.rows[0];

    if (!message) throw new NotFoundError(`No message: ${id}`);

    return message;
  }

  /** Delete given message from database; returns undefined.
   *
   * Throws NotFoundError if message not found.
   **/

  static async remove(id) {
    const result = await db.query(
          `DELETE
           FROM messages
           WHERE id = $1
           RETURNING id`, [id]);
    const message = result.rows[0];

    if (!message) throw new NotFoundError(`No message: ${id}`);
  }
}

module.exports = Message;
