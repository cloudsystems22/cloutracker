import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())

import usersRoutes from "./routes/users"
import authRoutes from "./routes/auth"
import customersRoutes from "./routes/customers"
import licenseRoutes from "./routes/license"
import index from "./routes/index"

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/customers', customersRoutes);
app.use('/license', licenseRoutes);
app.use('/', index);

export { app }