
const express = require('express');
const fs = require('fs');
const app = express();
const port = 30287;
// @ts-ignore
const CryptoJS = require("crypto-js");

// json
app.use(express.json());
app.use(express.text());

const client = require('prom-client');  // Prometheus client for Node.js

const gauge = new client.Gauge({
  name: 'activityjs',
  help: 'user activities.',
  labelNames: ['ip', 'referrer', 'acceptLanguage', 'type', 'url', 'title', 'selector', 'text', 'href', 'trk', 'trafficId', 'useragent', 'language']
});

const logFile = process.cwd() + '/queue.jsonl';

// @ts-ignore
// const main = async (extras) => {
const main = async () => {
  const lines = fs.readFileSync(logFile).toString().split('\n');
  for (const line of lines) {
    if (line.trim() === '') {
      continue;
    }
    const data = JSON.parse(line);
    // for (const result of data.results) {
      gauge.set({
        ip: data.ip,
        referrer: data.referrer,
        acceptLanguage: data.acceptLanguage,
        type: data.type,
        url: data.url,
        title: data.title,
        selector: data.selector,
        text: data.text,
        href: data.href,
        trk: data.trk,
        trafficId: data.trafficId,
        useragent: data.useragent,
        language: data.language
      }, 1);
    // }
  }
  // clear the queue
  fs.writeFileSync(logFile, '');
}

// Prometheus metrics
// @ts-ignore
app.get('/api/activity/v3/metrics', async (req, res) => {
  // let extras = {
  //   ip: req.ip
  // };
  // await main(extras);
  await main();
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
  // reset metrics
  gauge.reset();
});

// Route to add data from the client
// @ts-ignore
app.post('/api/activity/v3/queue', async (req, res) => {
  const body = req.body;
  
  try {
    const password = `1234`;
    const decrypted = CryptoJS.AES.decrypt(body, password).toString(CryptoJS.enc.Utf8);
    // const parsed = JSON.parse(decrypted);

    // const ip = req.ip;
    const parsedData = JSON.parse(decrypted);
    // parsedData.ip = ip;
    parsedData.ip = req.headers['x-real-ip'];
    parsedData.referrer = req.headers['referer']
    parsedData.acceptLanguage = req.headers['accept-language']
    const data = JSON.stringify(parsedData);

    // fs.appendFileSync(logFile, decrypted + '\n');
    fs.appendFileSync(logFile, data + '\n');
  } catch (e) {
    res.status(400).send("Invalid data.");
    return;
  }

  res.send('OK');
});

// Route to say hello
// @ts-ignore
app.get('/api/activity/v3/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
