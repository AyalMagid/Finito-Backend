module.exports = connectSockets;
const BoardService = require("../board/board-service.js");

function connectSockets(io) {
  io.on("connection", (socket) => {
    socket.on("joinedBoard", (boardId) => {
      if (socket.board) {
        socket.leave(socket.board);
      }
      socket.board = boardId;
      console.log("socket belongs to this board:", socket.board);
      socket.join(boardId);
    });

    socket.on("boardUpdate", async (board) => {
      await BoardService.update(board);
      io.to(socket.board).emit("boardUpdate", board);
    });
  });
}
