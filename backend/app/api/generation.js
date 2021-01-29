const { Router } = require("express");
const router = new Router();


router.get("/", (req, res) =>{
    res.json({generation: req.app.locals.engine.generation});
}); //Endpoint: param 1 and Call back:param 2

module.exports = router;