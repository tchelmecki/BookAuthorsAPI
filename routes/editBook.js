const express = require('express');
const {editShow, editBook, updateBookAPI} = require('../controllers/editControll');
const router = express.Router();

router.get('/edit-book/:id', editShow);
router.post('/edit-book', editBook);

/**
 * @swagger
 * /api/edit-book/{id}:
 *   put:
 *     summary: Edytuj książkę (API)
 *     description: Edytuje książkę na podstawie przekazanego identyfikatora książki i danych.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Identyfikator książki do edycji
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               authorName:
 *                 type: string
 *               bookTitle:
 *                 type: string
 *     responses:
 *       200:
 *         description: Książka została pomyślnie zaktualizowana
 *       404:
 *         description: Książka nie została znaleziona
 *       500:
 *         description: Wystąpił błąd podczas aktualizacji książki
 */
 router.put('/api/edit-book/:id', updateBookAPI);


module.exports = router;