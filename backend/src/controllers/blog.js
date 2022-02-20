const router = require("express").Router()
const blogService =require(" ./../services/blog.service")
const s = new blogService()

router.post("/new",s.login)
router.post("/update/:id",s.update)
router.put("/delete/:id",s.delete)
router.put("/", s.getPosts)

module.exports=router