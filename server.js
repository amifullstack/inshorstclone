const express = require("express");
const app = express();
const newsData = require("./NewsData.json")

app.get("/api/users", (req, res) => {
  // const users = [{ id: 123, fname: "Sanjay" }, { id: 123, fname: "X" }, { id: 123, fname: "Y" }];
  const users = {
    "users": [
      {
        id: 123, fname: "Sanjay"
      },
      {
        id: 123, fname: "X"
      }
    ]
  }

  res.json(users);
});

app.get("/api/newsdata", (req, res) => {
  res.json(newsData)
})

app.get("/api/newsdata/imges", (req, res) => {
  
})



const port = 5000;
app.listen(port, () => console.log(`Server started on port: ${port}`));
