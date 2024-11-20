const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/example:
 *   get:
 *     summary: Приклад ендпоінта
 *     description: Отримати приклад даних.
 *     responses:
 *       200:
 *         description: Успішна відповідь.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/first', (req, res) => {
    res.json({ message: '8 hours later...' });
});

module.exports = router;