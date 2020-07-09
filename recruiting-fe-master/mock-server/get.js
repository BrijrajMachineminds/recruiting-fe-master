module.exports = (req, res) => {
    res
        .delay(1000)
        .status(200)
        .send("OK");
};