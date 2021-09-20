"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error = function (err, req, res, next) {
    res.status(500).send("Something went wrong");
};
exports.default = error;
