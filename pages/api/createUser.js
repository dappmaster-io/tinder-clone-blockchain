import { client } from "../../lib/sanity";

export const createUserOnSanity = async (req, res) => {
  try {
    const userDoc = {
      _type: "users",
      _id: req.body.userWalletAddress,
      name: req.body.name,
      walletAddress: req.body.userWalletAddress,
    };
    await client.creatIfNotExists(userDoc);
    res.status(200).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: "error", data: error.message });
  }
};
