// const router = require("express").Router();
// const productControllers = require("./../controllers/productControllers");

// // router.post("/products", userControllers.postUser);
// router.get("/", productControllers.getAllProduct);
// // router.delete("/users/:id", userControllers.getDeleteUser);
// module.exports = router;
const router = require("express").Router();
const productControllers = require("../controllers/productsControllers");
// const userAuth = require("./../middlewares/userAuthMidd");

// router.post("/users", userControllers.postUser);
// router.get("/products", userControllers.getAllUser);
// router.get("/users/:id", userControllers.getUserById);
// router.delete("/users/:id", userControllers.getDeleteUser);
// router.patch("/users/:id", userControllers.getUpdateUser);
// router.put("/users/:id", userControllers.getPutUser);

router.get("/", productControllers.getAllProduct);

module.exports = router;
