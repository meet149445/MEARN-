import userModel from "../models/userModel.mjs";

export const createUser = async (req, res) => {
    try {
        let data = req.body;
        const user = await userModel.create(data);
        res.send({ status: "Ok", data: user });
    } catch (error) {
        res.send({ status: "Error", data: error });
    }
};