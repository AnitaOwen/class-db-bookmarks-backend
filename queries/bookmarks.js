// queries/bookmarks.js
const db = require('../db/dbConfig.js')

// queries/bookmarks.js
const getAllBookmarks = async () => {
    try {
      const allBookmarks = await db.any('SELECT * FROM bookmarks')
    //   console.log(allBookmarks)
      return allBookmarks
    } catch (error) {
      return error
    }
  }

module.exports = { getAllBookmarks }