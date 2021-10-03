const pool = require("./db");
const bcrypt = require("bcrypt");

module.exports = {
  postSignup: async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await pool.query(
        "INSERT INTO users (username, password) VALUES ($1, $2);",
        [username, hashedPassword]
      );
      res.json(newUser.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(200).send(0);
    }
  },
  postSignin: async (req, res) => {
    try {
      const { username, passowrd } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const passHash = bcrypt.hashSync(passowrd, salt);
      const userLog = await pool.query(
        "SELECT * FROM users WHERE username = $1",
        [username]
      );
      let actUser = userLog.rows[0];
      if (actUser.username === username) {
        let matched = bcrypt.compare(passHash, actUser.password);
        if (matched) {
          return res.status(200).send({ id: actUser.id, token: "key291" });
        }
      } else {
        return res.status(200).send({ id: -1 });
      }
    } catch (err) {
      res.status(401).send("User not found");
      console.error(err);
    }
  },
};
