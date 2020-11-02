const http = require('http');

http.request('http://nebo.live', (inc) => {
    console.log(inc)
});
