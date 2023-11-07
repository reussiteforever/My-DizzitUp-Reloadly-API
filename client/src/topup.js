const ReloadlyTopup = require("@reloadly/reloadly.airtime");
const ReloadlyCore = require("@reloadly/reloadly.core");
const express = require("express");


let app = express();
app.use(express.json());

app.get("/topup", async (req, res) => {
  let api = new ReloadlyTopup.AirtimeApi(
    "aLZwVjy3BTrx8yaFsb4iKgqFE2VGkpfs",
    "jOzKRlZVfB-WNlS88TEVt9uiNZtubg-XlKcY8D0cOWiZa6OIjcPe2BI7ZLAZ2an",
    null,
    ReloadlyCore.ServiceURLs.AIRTIME_SANDBOX
  );
  let operation;
  try {
    operation = await api.topups();
  } catch (err) {
    res.send(err);
  }
  let request = operation.send(
    new ReloadlyTopup.PhoneTopupRequest(
      20,
      341,
      new ReloadlyTopup.Phone("07738771515", "UK"),
      true,
      new ReloadlyTopup.Phone("007738771515", "UK")
    )
  );
  try {
    let topup = await request.execute();
    console.log(topup);
    res.send(`<html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Simple To-Do App</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
        </head>
        <body>
          <div class="container">
            <h1 class="display-4 text-center py-1">Top-up App</h1>
            <p class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                Your top-up details are Transaction ID: ${topup.transactionId} <br> Delivered Amount: ${topup.deliveredAmount} ${topup.deliveredAmountCurrencyCode} <br> Transaction Date: ${topup.transactionDate}
          </p>
          </div>
        </body>
        </html>`);
  } catch (err) {
    res.send(err);
  }
});

app.listen(3000, () => { console.log("server started on port 5000")});
