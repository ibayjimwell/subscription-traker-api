import express from 'express';
import { PORT } from './config/env.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middlewares/error.middleware.js';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
import workflowRouter from './routes/workflow.routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

// Route for Authentication
app.use('/api/v1/auth', authRouter);

// Route for Users
app.use('/api/v1/users', userRouter);

// Route for Subscriptions
app.use('/api/v1/subscriptions', subscriptionRouter);

// Route for Workflow
app.use('api/v1/workflows', workflowRouter);

// Error handling middleware
app.use(errorMiddleware);

app.listen(PORT, async () => {
    console.log(`App running on http://localhost:${PORT}`);

    // Connect to the database
    await connectToDatabase();
    
});

export default app;