const express = require('express');
const router = express.Router();
const notes = require('../data/notes');
const { protect } = require("../middlewares/authMiddleware");
const {
    getNoteById,
    getNotes,
    CreateNote, 
    DeleteNote, 
    UpdateNote, 
} = require("../controllers/noteController");

router.route("/").get(protect, getNotes);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);
router.route("/create").post(protect, CreateNote);

module.exports = router;