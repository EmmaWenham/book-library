module.exports = (connection, DataTypes) => {
  const schema = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: [true],
          msg: "Name cannot be empty",
        },
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: [true],
          msg: "Please use a valid email address",
        },
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: "Password cannot be empty",
        },
        islessThan8Characters(value) {
          if (value.length < 8)
            throw new Error("Password needs to be longer than 8 characters");
        },
      },
    },
  };

  const ReaderModel = connection.define("Reader", schema);
  return ReaderModel;
};