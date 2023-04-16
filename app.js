const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const alert = require("alert");
const _ = require("lodash");
const dataStore = require("nedb");

const app = express();
const port = 3300;

app.use(express.static(path.join(__dirname, "static")));
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

const user_database = new dataStore("./database/userreg.db");
const win_database = new dataStore("./database/winner.db");
const end_database = new dataStore("./database/endtime.db");
const l1_database = new dataStore("./database/l1.db");
const l2_database = new dataStore("./database/l2.db");
const l3_database = new dataStore("./database/l3.db");

user_database.loadDatabase();
win_database.loadDatabase();
end_database.loadDatabase();
l1_database.loadDatabase();
l2_database.loadDatabase();
l3_database.loadDatabase();

const level1 = ["the further", "sadie", "ronald defeo jr", "samara morgan"];
const level2 = [
  "derek jeter",
  "mohali",
  "hector mercedes",
  "birmingham",
  "steffi graf",
];
const level3 = ["midas", "charlotte tannhaus", "arnold weber"];

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  const params = {};
  res.redirect("/landing");
});

app.get("/rules", function (req, res) {
  res.render("rules.pug");
});

app.get("/landing", function (req, res) {
  const params = {};
  res.status(200).render("landing.pug", params);
});

app.get("/register", function (req, res) {
  const params = {};
  res.status(200).render("register.pug", params);
});

app.get("/login", function (req, res) {
  const params = {};
  res.status(200).render("login.pug", params);
});

app.post("/detail", async (req, res) => {
  var newData = req.body;
  var password = req.body.password;
  var confirmPassword = req.body.confirmPassword;
  console.log(password);
  console.log(confirmPassword);
  if (password == confirmPassword) {
    user_database.insert(newData, (err) => {
      if (err) {
        res.status(400).send("nooo");
      } else {
        res.render("landing.pug");
      }
    });
  } else {
    alert("Ensure you have entered the same Password");
  }
});

app.post("/et", async (req, res) => {
  var newData = req.body;
  win_database.insert(newData, (err) => {
    if (err) {
      res.status(400).send("nooo");
    } else {
      // const email = req.body.email;
      // const password = req.body.password;
      const uc = req.body.uc;
      console.log(uc, c);

      if (uc == c) {
        res.status(200).render("level2.pug");
        console.log(uc, c);
      } else {
        res.send("invalid");
      }
    }
  });
});

app.post("/check", async (req, res) => {
  var newData = req.body;
  win_database.insert(newData, (err) => {
    if (err) {
      res.status(400).send("nooo");
    } else {
      const email = req.body.email;
      const password = req.body.password;
      user_database.findOne({ email: email }, (err, data) => {
        try {
          console.log(data.password, password);
          console.log(data);
          if (data.password === password) {
            res.status(200).render("l1q1.pug");
          } else {
            res.send("invalid");
          }
        } catch {
          res.send(500, "invalid");
        }
      });
    }
  });
});

app.post("/l1q1", function (req, res) {
  let check = _.lowerCase(req.body.ans);
  if (check == level1[0]) {
    res.render("l1q2.pug");
  } else {
    alert("Wrong Answer");
  }
});

app.post("/l1q2", function (req, res) {
  let check = _.lowerCase(req.body.ans);
  if (check == level1[1]) {
    res.render("l1q3.pug");
  } else {
    alert("Wrong Answer");
  }
});

// app.post("/l1q3", function (req, res) {
//   let check = _.lowerCase(req.body.ans);
//   if (check == level1[2]) {
//     res.render("l1q4.pug");
//   } else {
//     alert("Wrong Answer");
//   }
// });

app.post("/l1q3", function (req, res) {
  let newdata = req.body;
  l1_database.insert(newdata, (er) => {
    if (er) {
      console.log(er);
    } else {
      let check = _.lowerCase(req.body.ans);
      let uc = req.body.uc;
      console.log(uc);
      user_database.findOne({ unique: uc }, (er, data) => {
        try {
          if (data.unique === uc) {
            if (check == level1[3]) {
              res.render("l2q1.pug");
            } else {
              alert("Wrong Answer");
            }
          }
        } catch {
          alert("Enter Valid Unique Code");
        }
      });
    }
  });
});

app.post("/l2q1", function (req, res) {
  let check = _.lowerCase(req.body.ans);
  if (check == level2[0]) {
    res.render("l2q2.pug");
  } else {
    alert("Wrong Answer");
  }
});

app.post("/l2q2", function (req, res) {
  let check = _.lowerCase(req.body.ans);
  if (check == level2[1]) {
    res.render("l2q3.pug");
  } else {
    alert("Wrong Answer");
  }
});

app.post("/l2q3", function (req, res) {
  let check = _.lowerCase(req.body.ans);
  if (check == level2[2]) {
    res.render("l2q4.pug");
  } else {
    alert("Wrong Answer");
  }
});

app.post("/l2q4", function (req, res) {
  let check = _.lowerCase(req.body.ans);
  if (check == level2[3]) {
    res.render("l2q5.pug");
  } else {
    alert("Wrong Answer");
  }
});

app.post("/l2q5", function (req, res) {
  let newdt = req.body;
  l2_database.insert(newdt, (er) => {
    if (er) {
      console.log(er);
    } else {
      let check = _.lowerCase(req.body.ans);
      let uc = req.body.uc;
      console.log(uc);
      user_database.findOne({ unique: uc }, (er, data) => {
        try {
          if (data.unique === uc) {
            if (check == level2[4]) {
              res.render("l3q1.pug");
            } else {
              alert("Wrong Answer");
            }
          }
        } catch {
          alert("Enter Valid Unique Code");
        }
      });
    }
  });
});

app.post("/l3q1", function (req, res) {
  var check = _.lowerCase(req.body.ans);
  if (check == level3[0]) {
    res.render("l3q2.pug");
  } else {
    alert("Wrong Answer");
  }
});

app.post("/l3q2", function (req, res) {
  var check = _.lowerCase(req.body.ans);
  if (check == level3[1]) {
    res.render("l3q3.pug");
  } else {
    alert("Wrong Answer");
  }
});

app.post("/l3q3", function (req, res) {
  var newData = req.body;
  l3_database.insert(newData, (er) => {
    if (er) {
      console.log(er);
    } else {
      var check = _.lowerCase(req.body.ans);
      var uc = req.body.uc;
      console.log(uc);
      user_database.findOne({ unique: uc }, (er, data) => {
        try {
          if (data.unique === uc) {
            if (check == level3[2]) {
              res.render("final.pug");
            } else {
              alert("Wrong Answer");
            }
          }
        } catch {
          alert("Enter Valid Unique Code");
        }
      });
    }
  });
});

app.listen(port, function () {
  console.log(`The server is running on port ${port}`);
});
