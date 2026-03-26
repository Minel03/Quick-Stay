import { getAuth } from '@clerk/express';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  try {
    const { userId } = getAuth(req); // ✅ Properly reads the Bearer token

    if (!userId) {
      return res.json({ success: false, message: 'Not Authenticated' });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
