import { AuthenticationApi } from "@reloadly/reloadly.authentication";
import { ServiceURLs } from "@reloadly/reloadly.core";
import express, { json } from "express";

let app = express();
app.use(json());

app.get("/token", async (req, res) => {
    let api = new AuthenticationApi(
    "aLZwVjy3BTrx8yaFsb4iKgqFE2VGkpfs",
    "jOzKRlZVfB-WNlS88TEVt9uiNZtubg-XlKcY8D0cOWiZa6OIjcPe2BI7ZLAZ2an",
    ServiceURLs.AIRTIME_SANDBOX
    );
    let operation = api.clientCredentials();
    let request = operation.getAccessToken();
    let response = await request.execute();
    console.log(response);
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
        We've received your access token!
        </p>
        </div>
    </body>
    </html>`);
});

app.listen(2000, () => {
    console.log("server started on port 2000")
});
