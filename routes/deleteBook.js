const express = require('express');
const {deleteBook, deleteBookAPI} = require('../controllers/deleteControl');
const router = express.Router();

router.post('/delete-book', deleteBook);

/**
 * @swagger
 * /api/delete-book/{id}:
 *   delete:
 *     summary: Usuń książkę (API)
 *     description: Usuwa książkę na podstawie przekazanego identyfikatora książki (interfejs API).
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Identyfikator książki do usunięcia
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Książka została pomyślnie usunięta
 *       404:
 *         description: Książka nie została znaleziona
 *       500:
 *         description: Wystąpił błąd podczas usuwania książki
 */
router.delete('/api/delete-book/:id', deleteBookAPI);

module.exports = router;