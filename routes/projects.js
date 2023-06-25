const express = require('express');
const router = express.Router();

router.get('/project', (req, res) => {
    res.render('project', { title: 'Project' });
});

module.exports = router;