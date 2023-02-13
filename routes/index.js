const express = require('express');
const router = express.Router();
const crmController = require('../controllers/crmController.js');
const crmList = require('../data/crmList.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { 
    title: '8 CRM API Integration Demo', 
    message: "Completed last Sunday in X hours.",
    crmList: crmList
  });
});

router.get('/sugarCRM', crmController.sugarCRM);
router.get('/pipeDriveCRM', crmController.pipeDriveCRM);
router.get('/zenDeskCRM', crmController.zenDeskCRM);
router.get('/freshWorksCRM', crmController.freshWorksCRM);
router.get('/keapCRM', crmController.keapCRM);
router.get('/zohoCRM', crmController.zohoCRM);
router.get('/sageCRM', crmController.sageCRM);
router.get('/insightlyCRM', crmController.insightlyCRM);

module.exports = router;