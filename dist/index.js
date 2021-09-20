"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var errorsHandler_1 = __importDefault(require("./tools/errorsHandler"));
var wildersController_1 = __importDefault(require("./controllers/wildersController"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(function (req, res, next) {
    console.log(new Date());
    console.log(req.body);
    next();
});
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/wilderdb", {
    autoIndex: true,
})
    .then(function () { return console.log('Connected'); })
    .catch(function (err) { return console.log(err); });
app.use('/wilders', wildersController_1.default);
app.use(errorsHandler_1.default);
app.listen(3000, function () { return console.log("Server started on 3000"); });
