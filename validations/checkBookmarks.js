const checkName = (req, res, next) => {
    if (req.body.name) {
      console.log('name is ok')
      return next()
    } else {
      res.status(400).json({ error: 'Name is required' })
    }
  }

  // validations/checkBookmarks/js
const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body
    // account if string or undefined
    // the value false will evaluate to false
    // therefore check if typeof is boolean as well
    if (
      is_favorite == 'true' ||
      is_favorite == 'false' ||
      is_favorite == undefined ||
      typeof is_favorite == 'boolean'
    ) {
        console.log('received boolean')
        next()
    } else {
      res.status(400).json({ error: 'is_favorite must be a boolean value' })
    }
  }

//   Multi-check string alternative:
// const checkName = (req, res, next) => {
//   if (!req.body.name) {
//     res.status(400).json({ error: "Name is required" });
//   } else if (!req.body.description) {
//     res.status(400).json({ error: "Description is required" });
//   } else {
//     return next();
//   }
// };
  
  module.exports = { checkBoolean, checkName }
