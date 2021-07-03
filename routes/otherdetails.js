const express = require("express")
const router = express.Router()

const {adddetails,setting,viewdetails} = require("../controller/otherdetails")

router.post("/user/otherdetails", adddetails)
router.post("/user/setting/:id", setting)
router.get("/user/details/:id", viewdetails)



module.exports = router