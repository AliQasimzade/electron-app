import Users from "../Models/UserModel.js";
import { checkToken } from "../Helpers/CheckToken.js";

const addToBasket = async (req, res) => {
    try {
        const token = req.token;
        const hasToken = checkToken(token);

        if (hasToken === "success") {
            const { id } = req.params;
            const addedProduct = req.body;

            const checkUserById = await Users.findOne({ _id: id });

            if (!checkUserById) throw new Error("No such user");

            await Users.findByIdAndUpdate({ _id: id }, { $set: { basket: addedProduct } });
            return res.status(200).json({
                message: "Product is added to basket",
                status: true
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            status: false
        })
    }
}


export { addToBasket };