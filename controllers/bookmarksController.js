const express = require("express");
const bookmarks = express.Router();
const { 
  getAllBookmarks, 
  getBookmark, 
  createBookmark 
} = require('../queries/bookmarks')

const {checkName, checkBoolean} = require('../validations/checkBookmarks.js')


// INDEX
bookmarks.get('/', async (req, res) => {
  const allBookmarks = await getAllBookmarks()
  if (allBookmarks[0]) res.status(200).json(allBookmarks)
  else res.status(500).json({ error: 'server error' })
})


// SHOW
bookmarks.get('/:id', async (req, res) => {
  const { id } = req.params
  const bookmark = await getBookmark(id)
  if (bookmark) {
    res.json(bookmark)
  } else {
    res.status(404).json({ error: 'not found' })
  }
})

// bookmarks.get("/:id", (req, res) => {
//   const { id } = req.params;

//   res.json({ message: `Get by id:${id} router` });
// });

// bookmarks.post("/", (req, res) => {
//   res.json({ message: "Post route" });
// });

// CREATE
bookmarks.post('/', checkName, checkBoolean, async (req, res) => {
  try {
    const bookmark = await createBookmark(req.body)
    res.json(bookmark)
  } catch (error) {
    res.status(400).json({ error: error })
  }
})



bookmarks.put("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ message: `Update item at id: ${id}` });
});

bookmarks.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ message: `Delete Item based on id: ${id}` });
});

module.exports = bookmarks;
