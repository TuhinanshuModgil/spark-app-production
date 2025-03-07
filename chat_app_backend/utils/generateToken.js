import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  console.log("Received userId:", userId);
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, 
	{
    httpOnly: false,
    secure: process.env.NODE_ENV !== "development",
    // sameSite: "none",
    maxAge: 15 * 24 * 60 * 60 * 1000,
  }
);
};

export default generateTokenAndSetCookie;
