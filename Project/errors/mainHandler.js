module.exports = (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            massage: err.massage || 'Server error',
            status: 900 //Example Field
        })
}