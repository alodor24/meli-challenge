"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const BASE_URL = process.env.BASE_URL;
const LIMIT = 4;
// Get all Items
router.get("/items", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { q } = req.query;
    try {
        const itemsData = yield fetch(`${BASE_URL}/sites/MLA/search?q=${q}&limit=${LIMIT}`).then((response) => response.json());
        const { results, filters } = itemsData;
        const items = results.map(({ id, title, price, currency_id, thumbnail, condition, shipping: { free_shipping }, address: { state_name }, }) => {
            return {
                id,
                title,
                price: {
                    currency: currency_id,
                    amount: Math.floor(price),
                    decimals: Number(((price % 1) * 100).toFixed(0)),
                },
                picture: thumbnail,
                condition,
                free_shipping,
                state_name,
            };
        });
        let itemCategories;
        if (filters.length) {
            itemCategories = filters[0].values[0].path_from_root.map((category) => category.name);
        }
        const data = {
            author: {
                name: "José Alejandro",
                lastname: "Méndez Sánchez",
            },
            categories: itemCategories || [],
            items,
        };
        res.send(data);
    }
    catch (error) {
        console.error(error);
        res.send(error);
    }
}));
// Get Item by ID
router.get("/items/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const itemId = req.params.id;
    try {
        const itemData = yield fetch(`${BASE_URL}/items/${itemId}`).then((response) => response.json());
        const itemDescription = yield fetch(`${BASE_URL}/items/${itemId}/description`).then((response) => response.json());
        const { id, title, price, currency_id, pictures, condition, shipping: { free_shipping }, sold_quantity, } = itemData;
        const data = {
            author: {
                name: "José Alejandro",
                lastname: "Méndez Sánchez",
            },
            item: {
                id,
                title,
                price: {
                    currency: currency_id,
                    amount: Math.floor(price),
                    decimals: Number(((price % 1) * 100).toFixed(0)),
                },
                picture: pictures[0].secure_url,
                condition,
                free_shipping,
                sold_quantity,
                description: itemDescription.plain_text,
            },
        };
        res.send(data);
    }
    catch (error) {
        console.error(error);
        res.send(error);
    }
}));
exports.default = router;
