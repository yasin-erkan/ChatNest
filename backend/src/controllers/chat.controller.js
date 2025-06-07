import { generateStreamToken, upsertStreamUser } from "../lib/stream.js";
import User from "../models/User.js";

export async function getStreamToken(req, res) {
  try {
    const token = generateStreamToken(req.user.id);

    res.status(200).json({ token });
  } catch (error) {
    console.log("Error in getStreamToken controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createStreamUser(req, res) {
  try {
    const { userId, name, image } = req.body;
    
    if (!userId || !name) {
      return res.status(400).json({ message: "User ID and name are required" });
    }

    const userData = {
      id: userId,
      name,
      image: image || "",
    };

    await upsertStreamUser(userData);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in createStreamUser controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getUserDetails(req, res) {
  try {
    const { userId } = req.params;
    
    const user = await User.findById(userId).select("fullName profilePic");
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("Error in getUserDetails controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
