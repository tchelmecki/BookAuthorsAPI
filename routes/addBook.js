const express = require('express');
const { addBook, addBookAPI } = require('../controllers/addControll');
const router = express.Router();

router.post('/authors-books', addBook);

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         authorName:
 *           type: string
 *         bookTitle:
 *           type: string
 *       required:
 *         - authorName
 *         - bookTitle
 */


/**
 * @swagger
 * /api/authors-books-api:
 *   post:
 *     summary: Add a new book (API)
 *     description: Adds new book for author (interfejs API)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Added successfully
 *       500:
 *         description: Create error
 */
router.post('/api/authors-books-api', addBookAPI);

module.exports = router;
