require("dotenv/config");
const bcrypt = require("bcrypt");
const { ADMIN } = require("./constants");
const User = require("../models/userModel");

const dbInitialization = async () => {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const adminUser= {
    firstName: "Admin",
    lastName: "User",
    email: ADMIN_EMAIL,
    password: "password",
    role: ADMIN,
  };
  const SALT_ROUND = 10;
  try {
    const existingAdminUser = await User.findOne({
       email: adminUser.email
    });
    if (!existingAdminUser) {
      const salt = await bcrypt.genSalt(SALT_ROUND);
      adminUser.password = await bcrypt.hash(adminUser.password, salt);
      const user = new User(adminUser);
      user.save();
    }
  } catch (error) {
    console.log("Error in dbInitialisation:", error);
  }
};

module.exports = {dbInitialization}