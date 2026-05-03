const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
    registerUser,
    loginUser,
    getUsers,
    updateUser,
    deleteUser
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", protect, getUsers);
router.put("/users/:id", protect, updateUser);
router.delete("/users/:id", protect, deleteUser);

module.exports = router;