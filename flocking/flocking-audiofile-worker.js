/*! Flocking audio file web worker decoder, Copyright 2011-2014 Colin Clark | flockingjs.org */

/*global importScripts, flock, onmessage, postMessage, self*/
/*jslint white: false, vars: true, newcap: true, regexp: true, browser: true,
    forin: true, continue: true, nomen: true, bitwise: true, maxerr: 100,
    indent: 4, plusplus: true, todo: true, culy: true, camelCase: true, eqeqeq: true,
    freeze: true, latedef: true, noarg: true, nonew: true, quotmark: double, undef: true,
    unused: true, strict: true, asi: false, boss: false, evil: false, expr: false,
    funcscope: false*/


"use strict";

// TODO: Allow toggling of these files with a production concatenated build.
importScripts(
    "../third-party/polydataview/js/polydataview.js",
    "./flocking-audiofile.js"
);

flock.audio.workerDecoder = {};

flock.audio.workerDecoder.sendBuffer = function (buffer, type) {
    postMessage({
        msg: "afterDecoded",
        buffer: buffer,
        type: type
    });
};

flock.audio.workerDecoder.sendError = function (errorMsg) {
    postMessage({
        msg: "onError",
        errorMsg: errorMsg
    });
};

onmessage = function (e) {
    var data = e.data,
        type = data.type;

    if (data.msg === "decode") {
        try {
            var buffer = flock.audio.decodeArrayBuffer(data.rawData, type);
            flock.audio.workerDecoder.sendBuffer(buffer, type);
        } catch (err) {
            flock.audio.workerDecoder.sendError(err.message);
        } finally {
            self.close();
        }
    }
};
