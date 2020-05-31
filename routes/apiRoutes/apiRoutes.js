const router = require('express').Router();

const authRoutes = require('./authRoutes');
// /api prepended to everyRoute inside of here
router.use('/auth', authRoutes);

module.exports = router;
