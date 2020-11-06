const https = require('https');

const options = {
    hostname: 'nebo.live',
    port: 443,
    path: '/',
    method: 'GET'
};

https.get(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        process.stdout.write(d);
    });

}).on('error', (e) => {
    console.error(e);
});
