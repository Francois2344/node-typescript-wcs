"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var WilderModel = require('../models/Wilder');
module.exports = {
    /**
     * Return an array of all wilders.
     * @returns {Promise<Array<EnforceDocument<unknown, {}>>>} a Promise which contains an array of wilders
     */
    findAll: function () {
        return WilderModel.find().exec();
    },
    /**
     * Return the wilder relative to the id in parameter.
     * @param id wilder id
     * @returns {Promise<(Document<any, any, unknown> & Require_id<unknown>) | null>} a Promise which contains a
     * single wilder
     */
    findById: function (id) {
        return WilderModel.findById(id).exec();
    },
    findByEmail: function (email) {
        return WilderModel.find();
    },
    /**
     * Create a wilder document with its name, city and skills.
     * @param wilderName wilder name
     * @param city  wilder city
     * @param skills wilder wkills
     * @returns {Promise<Document<any, any, unknown> & Require_id<unknown>>} a Promise
     */
    create: function (wilderName, city, skills) {
        return WilderModel.init().then(function () {
            var wilder = new WilderModel({
                name: wilderName,
                city: city,
                skills: skills
            });
            return wilder.save();
        });
    },
    /**
     * Update a single wilder
     * @param id wilder id
     * @param name wilder name
     * @param city wilder city
     * @param skills wilder skills
     * @returns {Promise<(Document<any, any, unknown> & Require_id<unknown>) | null>} a Promise which contains the updated
     * wilder.
     */
    update: function (id, name, city, skills) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, WilderModel.updateOne({ _id: id }, {
                        name: name,
                        city: city,
                        skills: skills
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, WilderModel.findById(id).exec()];
            }
        });
    }); },
    /**
     * Delete a wilder relative to its id in parameter.
     * @param id wilder id
     * @returns {Promise<(Document<any, any, unknown> & Require_id<unknown>) | null>} a Promise
     */
    delete: function (id) {
        return WilderModel.findByIdAndDelete(id).exec();
    }
};
