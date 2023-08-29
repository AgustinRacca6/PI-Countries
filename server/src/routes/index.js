const {Router} = require('express');
const countries = require('./CountriesRoutes/countryRoutes');
const activities = require('./ActivityRoutes/activityRoutes.js');

const router = Router();

router.use('/countries', countries);
router.use('/activities', activities);

module.exports = router;