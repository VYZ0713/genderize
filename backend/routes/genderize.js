const router = require('express').Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
let Gen = require('../model/genderize');

router.route('/:name').get((req, res) => {
    Gen.findOne({name: req.params.name}).lean().exec((err, doc) => {
        res.json({
            "name" : doc.name,
            "gender" : doc.gender 
        });
    });
});

router.route('/add').post(async (req, res) => {
    const name = req.body.name;
    let gender;

    await Gen.findOne({name: name}).lean().exec(async (err, doc) => {
        if(doc === null) {
            await fetch(`https://api.genderize.io?name=${name}`)
            .then(res => res.json())
            .then(data => {
                gender = data.gender;
            });

            const newPerson = new Gen({
                name, gender
            })

            newPerson.save()
                .then(() => res.json({"name": name}))
                .catch(err => res.status(400).json(`Error adding person : ${err}`));
        } else {
            res.json({
                "name" : doc.name,
                "gender" : doc.gender 
            });
        }
    });
});

module.exports = router;