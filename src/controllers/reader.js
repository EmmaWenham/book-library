const { Reader } = require("../models");

exports.create = async (req, res) => {
  const newReader = req.body;

  Reader
    .create(newReader)
    .then((newReaderCreated) => res.status(201).json(newReaderCreated))
    .catch((error) => {
      const errorMessages = error.errors.map((e) => e.message);
      
      return res.status(400).json({ errors: errorMessages });
    });
};

exports.findAll = async (req, res) => {
  const readers = await Reader.findAll();
  res.status(200).json(readers);
};

exports.findByPk = async (req, res) => {
  const { id } = req.params;

  const reader = await Reader.findByPk(id);

  if (!reader) {
    res.status(404).json({ error: "The reader could not be found." });
  } else {
    res.status(200).json(reader);
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const [updatedRows] = await Reader.update(updateData, { where: { id } });

  if (!updatedRows) {
    res.status(404).json({ error: "The reader could not be found." });
  } else {
    res.status(200).json(updatedRows);
  }
};

exports.destroy = async (req, res) => {
  const { id } = req.params;
  const deletedRows = await Reader.destroy({ where: { id } });

  if (!deletedRows) {
    res.status(404).json({ error: "The reader could not be found." });
  } else {
    res.status(204).json(deletedRows);
  }
};
