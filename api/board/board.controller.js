const boardService = require("./board-service.js");
const logger = require("../../services/logger.service");

module.exports = {
  getBoards,
  getBoard,
  removeBoard,
  updateBoard,
  addBoard,
};

// LIST
async function getBoards(req, res) {
  const byUser = req.session.user?req.session.user._id : "Guest";
  console.log("backend", byUser);
  const boards = await boardService.query(byUser);
  logger.debug(boards);
  res.json(boards);
}

//ONE ITEM
async function getBoard(req, res) {
  const id = req.params.id;
  const board = await boardService.getById(id);
  logger.debug(board);
  res.json(board);
}

//DELETE

async function removeBoard(req, res) {
  const id = req.params.id;
  const board = await boardService.remove(id);
  res.end();
}
//ADD

async function addBoard(req, res) {
  const board = req.body;
  const addedToy = await boardService.add(board);
  res.json(addedToy);
}

//UPDATE

async function updateBoard(req, res) {
  const board = req.body;
  const updatedToy = await boardService.update(board);
  res.json(updatedToy);
}
