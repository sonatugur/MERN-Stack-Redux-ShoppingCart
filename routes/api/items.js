const express = require('express');
const router = express.Router();


//Item model
const Item = require('../../models/Item');

router.get('/', (req,res) => {
    Item.find()
        .sort({date : -1})
        .then((items) => res.json(items) )
})

router.post('/', (req,res) => {
    const item = new Item({
        name : req.body.name
    });
    item.save().then((item) => res.json(item));
})


router.delete('/:id', (req,res) => {
    Item.findByIdAndDelete({_id : req.params.id}).then((item) => res.json(item))
                                                    .catch((err) => res.status(404).send({success:false}))
})

module.exports = router;