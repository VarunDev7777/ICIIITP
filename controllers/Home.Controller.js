module.exports = {
    getHome: (req, res) => {
        res.render("index")
    },
    getcallForPapers: (req, res) => {
        res.render("callforpapers")
    },
    getRegister: (req, res) => {
        res.render("register")
    },
    getAbout: (req, res) => {
        res.render("about")
    },
    getVenue: (req, res) => {
        res.render("venue")
    },
    getContact: (req, res) => {
        res.render("contact")
    }
}