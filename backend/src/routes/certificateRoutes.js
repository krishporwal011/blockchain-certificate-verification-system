const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const {
  issueCertificate,
  verifyCertificate,
  revokeCertificate,
  getCertificates,
  verifyFile
} = require('../controllers/certificateController');

const router = express.Router();

router.post('/issue', upload.single('certificate'), issueCertificate);
router.get('/verify/:certificateId', verifyCertificate);
router.post('/revoke/:certificateId', revokeCertificate);
router.get('/', getCertificates);
router.post('/verify-file/:certificateId', upload.single('certificate'), verifyFile);

module.exports = router;
