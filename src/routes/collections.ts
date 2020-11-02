
/** contains all the collection routes for api */

import express, { Router } from "express";
import { debug } from "console";
import responses from "../responses"; // contains placeholder responses
import dotenv from "dotenv";

import collection_collectionId_position from "../routes/collections/collectionId/position";
import collection_collectionId_area from "../routes/collections/collectionId/area";

// setup
const router: Router = express.Router();
dotenv.config();
// globals 
const protocol = process.env.TARGET_PROTOCOL;
const target = process.env.TARGET;

// construct routes
const collectionCollectionIdPosition = new collection_collectionId_position(protocol, target);
const collectionCollectionIdArea = new collection_collectionId_area(protocol, target);


// --- ROUTES ---

/** list all requirements classes specified in a standard that the server conforms to */
router.get("/", (req, res) => {
    debug("GET /collections");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections);
});


/** List query types supported by the collection */
router.get("/:collectionId", (req, res) => {
    debug("GET /collections/{collectionsId}");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId);
});


/** List available items */
router.get("/:collectionId/items", (req, res) => {
    debug("GET /collections/{collectionsId}/items");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_items);
});


/** List data instances of {collectionId} */
router.get("/:collectionId/instance", (req, res) => {
    debug("GET /collections/{collectionsId}/instance");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_instances);
});


/** List available location identifers for the collection  */
router.get("/:collectionId/locations", (req, res) => {
    debug("GET /collections/{collectionsId}/locations");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_locations);
});


/** List available location identifers for the instance */
router.get("/:collectionId/instance/:instanceId/locations", (req, res) => {
    debug("GET /collections/{collectionsId}/instance/{instanceId}/locations");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_instances_instanceId_locations);
});


/** Query end point for position queries of collection {collectionId} */
router.use("/:collectionId/position", collectionCollectionIdPosition.route);


/** Query end point for radius queries of collection {collectionId} */
router.get("/:collectionId/radius", (req, res) => {
    debug("GET /collections/{collectionsId}/radius");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_radius);
});


/** Query end point for area queries of collection {collectionId} defined by a polygon */
router.use("/:collectionId/area", collectionCollectionIdArea.route);


/** Query end point for Cube queries of collection {collectionId} defined by a cube */
router.get("/:collectionId/cube", (req, res) => {
    debug("GET /collections/{collectionsId}/cube");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_cube);
});


/** Query end point for trajectory queries of collection {collectionId} defined by a wkt linestring and a iso8601 time period */
router.get("/:collectionId/trajectory", (req, res) => {
    debug("GET /collections/{collectionsId}/trajectory");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_trajectory);
});


/** Query end point for Corridor queries of collection {collectionId} defined by a polygon */
router.get("/:collectionId/corridor", (req, res) => {
    debug("GET /collections/{collectionsId}/corridor");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_corridor);
});


/** Return item {itemId} from collection {collectionId} */
router.get("/:collectionId/items/:itemId", (req, res) => {
    debug("GET /collections/{collectionsId}/items/{itemId}");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_items_itemId);
});


/** Query end point for queries of collection {collectionId} defined by a location id */
router.get("/:collectionId/locations/:locId", (req, res) => {
    debug("GET /collections/{collectionsId}/locations/{locId}");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_locations_locId);
});


/** Query end point for position queries of instance {instanceId} of collection {collectionId} */
router.get("/:collectionId/instance/:instanceId/position", (req, res) => {
    debug("GET /collections/{collectionsId}/instance/{instanceId}/position");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_instance_instanceId_position);
});


/** Query end point to return data within defined radius of a point for an instance {instanceId} of collection {collectionId} */
router.get("/:collectionId/instance/:instanceId/radius", (req, res) => {
    debug("GET /collections/{collectionsId}/instance/{instanceId}/radius");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_instance_instanceId_radius);
});


/** Query end point for area queries of instance {instanceId} of collection {collectionId} defined by a polygon */
router.get("/:collectionId/instance/:instanceId/area", (req, res) => {
    debug("GET /collections/{collectionsId}/instance/{instanceId}/area");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_instance_instanceId_area);
});


/** Query end point for Cube queries of instance {instanceId} of collection {collectionId} defined by a cube */
router.get("/:collectionId/instance/:instanceId/cube", (req, res) => {
    debug("GET /collections/{collectionsId}/instance/{instanceId}/cube");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_instance_instanceId_cube);
});


/**  Query end point for trajectory queries of instance {instanceId} of collection {collectionId} defined by a wkt linestring and a iso8601 time period */
router.get("/:collectionId/instance/:instanceId/trajectory", (req, res) => {
    debug("GET /collections/{collectionsId}/instance/{instanceId}/trajectory");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_instance_instanceId_trajectory);
});


/**  Query end point for Corridor queries of instance {instanceId} of collection {collectionId} defined by a polygon */
router.get("/:collectionId/instance/:instanceId/corridor", (req, res) => {
    debug("GET /collections/{collectionsId}/instance/{instanceId}/corridor");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_instance_instanceId_corridor);
});


/** Query end point for queries of instance {instanceId} of collection {collectionId} defined by a location id */
router.get("/:collectionId/instance/:instanceId/locations/:locId", (req, res) => {
    debug("GET /collections/{collectionsId}/instance/{instanceId}/locations/{locId}");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_instance_instanceId_locations_locId);
});


export default router;

