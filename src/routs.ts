import express, { NextFunction, Request, Response } from 'express';
import { authRouts } from './modules/auth/auth.rout';
import { userRoutes } from './modules/user/user.rout';
import { settingsRoutes } from './modules/settings/settings.rout';
import { self_signal_routes } from './modules/self_signals/self_signals.route';
import { edge_signal_routes } from './modules/edge_signals/edge_signals.route';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: authRouts,
    },
    {
        path: '/users',
        route: userRoutes,
    },
    {
        path: '/self-signal',
        route: self_signal_routes,
    },
    {
        path: '/edge-signal',
        route: edge_signal_routes,
    },
    {
        path: '/setting',
        route: settingsRoutes,
    }
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;