const User = require("./../models/userModel");

const login = async (req, res) => {
  console.log(req.body);
  const user = req.body;
  console.log(user);
  try {
    let findUser = await User.findOne({ email: user.email });
    if (findUser) {
      return res.status(200).send("welcome");
    } else {
      return res.status(201).send("duzgun email daxil edin ");
    }
  } catch {
    (err) => {
      console.log(err);
      return err;
    };
  }
};

const postUser = async (req, res) => {
  console.log(req.body);
  const user = req.body;

  try {
    let findUser = await User.findOne({ email: user.email });
    if (findUser) {
      return res.status(201).send("bu emailli user var");
    }
    {
      const newUser = new User(req.body);
      console.log(newUser);
      newUser.save();

      res.status(200).send({
        message: "istifadeci ugurla qeydiyyatdan kecdi",
      });
    }
  } catch {
    (err) => {
      console.log(err);
      return err;
    };
  }
};
const getDeleteUser = async (req, res) => {
  let id = req.params.id;
  let deletedUser = await User.findByIdAndDelete(id);
  console.log("deleted: ", deletedUser);
  res.send(deletedUser);
};

const getAllUser = async (req, res) => {
  console.log("salam");

  let allUser = await User.find({});
  console.log(allUser);
  res.send(allUser);
};

module.exports = { postUser, getAllUser, getDeleteUser, login };
