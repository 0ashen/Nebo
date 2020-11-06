const https = require('https');

const options = {
    hostname: 'nebo.live',
    port: 443,
    path: '/',
    method: 'GET'
};

const req = https.request(options, (res) => {
    console.log(res)
    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

req.on('error', (e) => {
    console.error(e);
});

req.end();

