const express = require("express");
const readerController = require("../controllers/reader");

const router = express.Router();

router.post("/", readerController.create);

router.get("/", readerController.findAll);

router.get("/:id", readerController.findByPk);

router.patch("/:id", readerController.update);

router.delete("/:id", readerController.destroy);

module.exports = router;
