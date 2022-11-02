module.exports = {
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            res.json('ok');
        } catch (e) {
            next(e);
        }
    }
}