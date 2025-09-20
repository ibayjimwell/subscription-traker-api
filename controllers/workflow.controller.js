import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { serve } = require('@upstash/workflow/express');
import dayjs from 'dayjs';
import Subscription from '../models/subscription.models.js';

const REMINDERS = [7, 5, 2, 1]; // days before renewal

export const sendReminders = serve( async ( context ) => {
    const { subscriptionId } = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if (!subscription || subscription.status != active) return;

    const renewalDate = dayjs(subscription.renewalDate);

    if (renewalDate.isBefore(dayjs() /* Return the current date */)) {
        console.log.log(`Renewal date has passed for subscription ${subscriptionId}. Stopping Workflow.`);
    }

    for (const daysBefore of REMINDERS) {
        const reminderDate = renewalDate.subtract(daysBefore, 'day');

        if (reminderDate.isAfter(dayjs() /* Return the current date */)) {
            await sleepUntilReminder(context, `Reminder ${daysBefore} days before`, reminderDate);
        }
    }

    await triggerReminder(context, `Reminder ${daysBefore} days before`);
});

const fetchSubscription = async (context, subsriptionId) => {
    return await context.run(`get subscription`, () => {
        return Subscription.findById(subsriptionId).populate('user', 'new email');
    });
}

const sleepUntilReminder = async (context, label, date) => {
    console.log(`Sleeping until ${label} reminder at ${date.toISOString()}`);
    await context.sleepUntil(date.toDate());
} 

const triggerReminder = async (context, label) => {
    return await context.run(label, () => {
        console.log(`Triggering ${label} reminder`);
    });
}