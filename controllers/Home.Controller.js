module.exports = {
    getHome: (req, res, next) => {
        const attemptedRequest = req.query.attemptedRequest || null;
        res.render("index", { attemptedRequest: attemptedRequest });
    }
}