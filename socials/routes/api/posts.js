const express = require('express');
const router = express.Router();

/*
@route        GET api/posts/test
@description  Test posts route
@access       Public
*/
router.get('/test', (req, res) => res.json({msg: "Profile works"}));

module.exports = router;
