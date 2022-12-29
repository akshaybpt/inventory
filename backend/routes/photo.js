const express=require('express');
const router=express();
const upload =require('../middleware/upload');
router.post('/upload', upload, async (req, res) => {
    const url = req.protocol + '://' + req.get('host')
    const img=url + '/assest/img/' + req.file.filename
   // res.send(req.file);
     res.send({img})
});

module.exports = router;
