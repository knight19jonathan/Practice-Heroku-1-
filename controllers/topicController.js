const express = require("express");
const router = express.Router();
const fs = require("fs");


router.get("/", (req, res) => {
    fs.readFile("./pets.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        } else {
            const topics = JSON.parse(data);
            res.json(topics);
        }
    });
});

router.post("/",(req,res)=>{
    console.log(req.body);
    const newTopic = {
        id: req.body.id,
        author: req.body.author,
        category: req.body.category,
        comment: req.body.comment
    };
    fs.readFile("./topis.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        } else {
            const topics = JSON.parse(data);
            topics.push(newTopic);
            fs.writeFile(
                "./topics.json",
                JSON.stringify(topics, null, 4),
                (err, data) => {
                    if (err) {
                        throw err;
                    }
                    res.json({ data: req.body, message: "Success!"});
                }
            );
        }
    });
});

module.exports = router;