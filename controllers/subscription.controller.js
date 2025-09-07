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

// Getting User Subscriptions
export const getUserSubscriptions = async (req, res, next) => {
    try {
        if (req.user.id != req.params.id) {
            const error = new Error('You are not the ownner of this account.');
            error.status = 401;
            throw error;
        }

        const subscription = await Subscription.find({ user: req.params.id });
        res.status(200).json({});
    } catch (error) {
        next(error);
    }
}