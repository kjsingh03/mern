export const errorMiddleware = (err, req, res, next) => {
    err.statuscode = err.statuscode || 500;
    err.message = err.message || "internal server error";

    res.status(err.statuscode).json({
        success: false,
        message: err.message
    })
}