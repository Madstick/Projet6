const multer = require('multer')

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images')
  },
  filename: (req, file, callback) => { // On va renommer le fichier
    const name = file.originalname.split(' ').join('_') // On élimine les espaces du nom d'origine, remplacés par "_"
    const extension = MIME_TYPES[file.mimetype]
    callback(null, name + Date.now() + '.' + extension) // création du nom final
  },
})

module.exports = multer({ storage }).single('image')