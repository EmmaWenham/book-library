const express = require("express");
const bookController = require("../controllers/books");

const router = express.Router();

router.post("/", bookController.create);

router.get("/", bookController.read);

router.get("/:id", bookController.readById);

router.patch("/:id", bookController.update);

router.delete("/:id", bookController.delete);

module.exports = router;
