const express = require('express');
const {getBook, getBooksAPI, getBookOneAPI} = require('../controllers/getControll');
const router = express.Router();



router.get('/', getBook);

/**
 * @swagger
 *  components:
 *      schema:
 *          authorbooks:
 *              type: object
 *              properties:
 *                  _id:
 *                      type: string
 *                  authorName:
 *                      type: string
 *                  bookTitle: string
 */

/**
 * @swagger
 * /api/authors:
 *  get:
 *      summary: This api is used to check if get method is working or not
 *      description: This api is used to check if get method is working or not
 *      responses:
 *          200:
 *              description: To test Get method
 *          500:
 *              description: Get error
 */
router.get('/api/authors', getBooksAPI);

/**
 * @swagger
 * /api/authors/{id}:
 *  get:
 *      summary: This api is used to check if get method is working or not
 *      description: This api is used to check if get method is working or not
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Numer ID required
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *              description: this api is use to fetch data
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#components/schema/authorbooks'
 *          500:
 *              description: Get error by id
 */
router.get('/api/authors/:id', getBookOneAPI);


module.exports = router;