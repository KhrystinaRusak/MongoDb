const multer = require("multer");

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

app.use(express.static(__dirname));

app.use(multer({ storage: storageConfig }).single("filedata"));
app.post("/upload", function(req, res, next) {
    let filedata = req.file;
    if (!filedata) {
        res.send("Ошибка при загрузке файла");
    } else {
        res.send("Файл загружен");
    }
});
app.listen(3000, () => { console.log("Server started"); });

// function multer.diskStorage
filename: function(req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
}

app.use(multert({ storage: storageConfig }).single("filedata"));

// filter files
// определение фильтра
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image.png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
    }
}