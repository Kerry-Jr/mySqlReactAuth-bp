const router = require('express').Router();
const apiRoutes = require('./apiRoutes/apiRoutes');
const authRoutes = require('./apiRoutes/authRoutes');

// / prepended to everyRoute
router.use('/api', apiRoutes);


module.exports = router;
