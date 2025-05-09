const express = require('express');
const router = express.Router();

const subject = require('../data/contact_subject.json')

router.get('/', (req, res) => {
    //res.end('{"contactSubject": ["General Enquiry","Class","Schedule","instructor","Price","Location","Other","Sp"]}');
    res.json(subject);

});

module.exports = router;

