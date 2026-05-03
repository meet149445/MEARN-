import userModel from "../models/models.mjs";

export const createUser = async (req, res) => {
  try {
    const data = req.body;

    console.log("📥 Incoming:", data);

    // ✅ create user FIRST
    const user = await userModel.create(data);

    // ✅ then use it
    console.log("✅ Saved:", user);

    res.json({
      message: "User saved successfully",
      data: user
    });

  } catch (error) {
    console.log("❌ Error:", error);
    res.status(500).json({ error: error.message });
  }
};