export const checkToken = (token) => {
    if (!token) {
        return "Please login"
    } else {
        return "success"
    }
}