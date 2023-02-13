// Description: This controller file routes user to the correct CRM page.

exports.sugarCRM = (req, res, next) => {
    res.render('sugarCRM', { title: 'SugarCRM API', message: 'Test' });
  };
  
  exports.pipeDriveCRM = (req, res, next) => {
    res.render('pipeDriveCRM', { title: 'PipeDriveCRM API', message: 'Test' });
  };
  
  exports.zenDeskCRM = (req, res, next) => {
    res.render('zenDeskCRM', { title: 'ZenDeskCRM API', message: 'Test' });
  };
  
  exports.freshWorksCRM = (req, res, next) => {
    res.render('freshWorksCRM',  { title: 'FreshWorksCRM API', message: 'Test' });
  };
  
  exports.keapCRM = (req, res, next) => {
    res.render('keapCRM', { title: 'KeapCRM API', message: 'Test' });
  };
  
  exports.zohoCRM = (req, res, next) => {
    res.render('zohoCRM', { title: 'ZohoCRM API', message: 'Test' });
  };
  
  exports.sageCRM = (req, res, next) => {
    res.render('sageCRM', { title: 'SageCRM API', message: 'Test' });
  };
  
  exports.insightlyCRM = (req, res, next) => {
    res.render('insightlyCRM', { title: 'InsightlyCRM API', message: 'Test' });
  };