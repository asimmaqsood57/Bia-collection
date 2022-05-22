const express = require("express");
const cors = require("cors");
const sliderItem = require("./models/sliderItem");
const popularProduct = require("./models/popularProduct");
const category = require("./models/category");
const app = express();
const PORT = 3001 || process.env.PORT;

require("./dbcon");
app.use(express.json());
app.use(cors());
// app.use("/api/home", require("./routes/Home"));
// app.use("/api/hostel", require("./routes/hostels"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/getslideritem", async (req, res) => {
  sliderItem.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});
app.get("/getpopularitem", async (req, res) => {
  popularProduct.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});
app.get("/getcategories", async (req, res) => {
  category.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.post("/insertpopularproduct", async (req, res) => {
  const id = req.body.id;
  const img = req.body.img;

  const data = new popularProduct({
    id: id,
    img: img,
  });

  try {
    await data.save().then((result) => {
      console.log(result);
      res.send("record inserted");
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/insertslideritems", async (req, res) => {
  const id = req.body.id;

  const img = req.body.img;
  const title = req.body.title;
  const desc = req.body.desc;

  const bg = req.body.bg;

  const data = new sliderItem({
    id,
    img,
    title,
    desc,
    bg,
  });

  try {
    await data.save().then((result) => {
      console.log(result);
      res.send("record inserted");
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/insertcategory", async (req, res) => {
  const id = req.body.id;

  const img = req.body.img;
  const title = req.body.title;

  const data = new category({
    id,
    img,
    title,
  });

  try {
    await data.save().then((result) => {
      console.log(result);
      res.send("record inserted");
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log("server is running at port 3001");
});
