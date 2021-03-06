const router = require("express").Router()
const blogService =require("./../services/blog.service")
const s = new blogService()

router.post("/new",s.login)
router.post("/update/:id",s.update) // check on this
router.put("/delete/:id",s.delete)
router.get("/", s.getPosts)

module.exports=router