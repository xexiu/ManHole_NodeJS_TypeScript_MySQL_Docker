import { Request, Response } from 'express';
import saveManholeCover from '../core/interactors';

const buildManholeCoverController = async (request: Request, response: Response) => {
    const { body } = request;
    const { manHole } = body;

    try {
        const ticket = await saveManholeCover(manHole);
        // tslint:disable-next-line: no-console
        response.json(ticket);
    } catch (e) {
        response.sendStatus(400);
    }
};

export default buildManholeCoverController;
