
const middlewareError = (req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Endpoint not found'
    })
}

module.exports = middlewareError;