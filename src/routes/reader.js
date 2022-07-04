const express = require("express");
const readerController = require("../controllers/reader");

const router = express.Router();

router
  .route("/")
  .get(readerController.findAll)
  .post(readerController.create);

router
  .route("/:id")
  .get(readerController.findByPk)
  .patch(readerController.update)
  .delete(readerController.destroy);

module.exports = router;