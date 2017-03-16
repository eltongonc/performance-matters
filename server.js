const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const routeStatic = require('./lib/route-static');
const redirectIndices = require('./lib/redirect-indices');
const compression = require('compression');
const critical = require('critical');

const app = express();
const baseDir = 'src/';
const port = process.env.PORT || 3004;


app.set('etag', false);
app.use((req, res, next) => { res.removeHeader('X-Powered-By'); next(); });

// compression
app.use(compression());

// critical css
critical.generate({
    inline: false,
    base: 'src/',
    // HTML source file
    src: 'index.html',
    css: [
        'src/build/bundeld.css',
        'src/dist/css/bootstrap.css'
    ],
    width: 1300,
    height: 900,
    dest: 'build/critical.css',
    minify: true,
    extract: true,
});

// static routes
app.use(routeStatic);
app.use('/static', express.static(path.join(__dirname, baseDir), { etag: false, lastModified: false, maxage: '1y' }));

// dynamic pages
app.use(redirectIndices);
nunjucks.configure(baseDir, {
    autoescape: true,
    express: app,
    watch: true
});

app.get('*', (req, res, next) => {
    res.render(path.join('./', req.url, 'index.html'), {});
});

app.listen(port, (err) => {
    err ? console.error(err) : console.log(`app running on http://localhost:${port}`);
});

/**
* TODO: Combine images into 1 and load sprites
**/
