import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import {
  ItemDescriptionResponse,
  ItemListResponse,
  ItemResponse,
} from "../types";

const router = express.Router();
const BASE_URL = process.env.BASE_URL;
const LIMIT = 4;

// Get all Items
router.get("/items", async (req, res) => {
  const { q } = req.query;

  try {
    const itemsData: ItemListResponse = await fetch(
      `${BASE_URL}/sites/MLA/search?q=${q}&limit=${LIMIT}`
    ).then((response) => response.json());

    const { results } = itemsData;

    const items = results.map(
      ({
        id,
        title,
        price,
        currency_id,
        thumbnail,
        condition,
        shipping: { free_shipping },
        address: { state_name },
      }) => {
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
      }
    );

    const data = {
      author: {
        name: "José Alejandro",
        lastname: "Méndez Sánchez",
      },
      categories: [],
      items,
    };

    res.send(data);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

// Get Item by ID
router.get("/items/:id", async (req, res) => {
  const itemId = req.params.id;

  try {
    const itemData: ItemResponse = await fetch(
      `${BASE_URL}/items/${itemId}`
    ).then((response) => response.json());

    const itemDescription: ItemDescriptionResponse = await fetch(
      `${BASE_URL}/items/${itemId}/description`
    ).then((response) => response.json());

    const {
      id,
      title,
      price,
      currency_id,
      pictures,
      condition,
      shipping: { free_shipping },
      sold_quantity,
    } = itemData;

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
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

export default router;
