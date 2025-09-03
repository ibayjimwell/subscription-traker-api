// Subscription logic 

// Subscription Model Schema or the Database Subscription Table
import Subscription from "../models/subscription.models.js";

// Creating subscription
export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ... req.body,
            user: req.user_id,
        });

        res.status(201).json({success: true, data: subscription});
    } catch (error) {
        next(error);
    }
}