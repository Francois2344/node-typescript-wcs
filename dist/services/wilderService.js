"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var wildersRepository_1 = __importDefault(require("../repositories/wildersRepository"));
var mongoose_1 = __importStar(require("mongoose"));
var WilderSchema = new mongoose_1.Schema({
    name: { type: String, unique: true },
    city: String,
    skills: [{ title: String, votes: Number }],
});
var wilderModel = mongoose_1.default.model("wilder", WilderSchema);
var wilderService = {
    /**
     * Return all wilders.
     * @returns {Promise<Array<EnforceDocument<unknown, {}>>>}
     */
    read: function () {
        return wildersRepository_1.default.findAll();
    },
    /**
     * Read one wilder relative to the id in parameter
     * @param id wilder id
     * @returns {Promise<Array<EnforceDocument<unknown, {}>>>}
     */
    readOne: function (id) {
        return wildersRepository_1.default.findById(id);
    },
    /**
     * Insert a new wilder relative to the wilder name, the city,
     * the skills
     * @param wilderName
     * @param city
     * @param skills
     * @returns {Promise<*>}
     */
    create: function (wilderName, city, skills) {
        return wildersRepository_1.default.create(wilderName, city, skills);
    },
    /**
     * Update an existing wilder.
     * @param id wilder id
     * @param wilderName wilder name
     * @param city wilder city
     * @param skills wilder skills
     * @returns {Promise<(Document<*, *, *>&Require_id<*>)|null>} a Promise which contains
     */
    update: function (id, wilderName, city, skills) {
        return wildersRepository_1.default.update(id, wilderName, city, skills);
    },
    /**
     * Delete a wilder relative to its id in parameter
     * @param id wilder id
     * @returns {Promise<(Document<*, *, *>&Require_id<*>)|null>} a Promise
     */
    delete: function (id) {
        return wildersRepository_1.default.delete(id);
    }
};
exports.default = wilderService;
