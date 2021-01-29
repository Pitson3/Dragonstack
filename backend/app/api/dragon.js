const { Router } = require("express");
const router = new Router();


router.get("/new", (req, res) =>{
    res.json({dragon: req.app.locals.engine.generation.newDragon()});
}); //Endpoint: param 1 and Call back:param 2

module.exports = router;