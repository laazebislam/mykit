import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackMid from 'webpack-dev-middleware';
let port = 3000;
let app = express();
const compiler = webpack(config);
app.use(webpackMid(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});
app.listen(port, function(err) {
    if (err) throw err;
    open("http://localhost:" + port);
});