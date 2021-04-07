module.exports = {
    getHome: (req, res) => {
        const attemptedRequest = req.query.attemptedRequest || null;
        res.render("index", { attemptedRequest: attemptedRequest });
    },
    getcallForPapers: (req, res) => {
        const attemptedRequest = req.query.attemptedRequest || null;
        res.render("callforpapers", { attemptedRequest: attemptedRequest });
    },
    getRegister: (req, res) => {
        const attemptedRequest = req.query.attemptedRequest || null;
        res.render("register", { attemptedRequest: attemptedRequest });
    },
    getAbout: (req, res) => {
        const attemptedRequest = req.query.attemptedRequest || null;
        res.render("about", { attemptedRequest: attemptedRequest });
    },
    getVenue: (req, res) => {
        const attemptedRequest = req.query.attemptedRequest || null;
        res.render("venue", { attemptedRequest: attemptedRequest });
    }
}