const express = require("express");
const usersController = require("../controllers/tourtimes");
const { authenticate } = require("../middleware");
const router = express.Router();

router.get("/", authenticate, usersController.getAllTours);

router.get("/:id", authenticate, usersController.getTourById);

// router.post("/", authenticate, usersController.createUser);

// router.put("/:id", authenticate, usersController.updateUserById);

// router.delete(
//   "/:username", authenticate, usersController.deleteUserByFirstName
// );

module.exports = router;
