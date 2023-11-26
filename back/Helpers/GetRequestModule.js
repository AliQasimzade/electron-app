export const getModule = (statusCode, data,res) => {
     return res.status(statusCode).json(data)
}