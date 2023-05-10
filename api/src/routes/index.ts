import * as dotenv from "dotenv";
import express from "express";
import {
  ItemDescriptionResponse,
  ItemListResponse,
  ItemResponse,
} from "../types";

dotenv.config();
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

    const { results, filters } = itemsData;

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

    let itemCategories;

    if (filters.length) {
      itemCategories = filters[0].values[0].path_from_root.map(
        (category) => category.name
      );
    }

    const data = {
      author: {
        name: "José Alejandro",
        lastname: "Méndez Sánchez",
      },
      categories: itemCategories || [],
      items,
    };

    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
});

// Get Item by ID
router.get("/items/:id", async (req, res) => {
  const { id: itemId } = req.params;

  try {
    const [itemData, itemDescription]: [ItemResponse, ItemDescriptionResponse] =
      await Promise.all([
        fetch(`${BASE_URL}/items/${itemId}`).then((response) =>
          response.json()
        ),
        fetch(`${BASE_URL}/items/${itemId}/description`).then((response) =>
          response.json()
        ),
      ]);

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
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
});

export default router;
