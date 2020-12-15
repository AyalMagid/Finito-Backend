const express = require("express");
const { getBoards, getBoard, removeBoard,updateBoard,addBoard,} = require("./board.controller");
const { requireAuth,requireAdmin,} = require("../../middlewares/requireAuth.middleware");
const router = express.Router();


router.get("/", getBoards);
router.get("/:id", getBoard);
router.delete("/:id", requireAuth,removeBoard);
router.put("/:id", updateBoard);
router.post("/", addBoard);

module.exports = router;