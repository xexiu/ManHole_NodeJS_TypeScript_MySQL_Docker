import { Request, Response } from 'express';
import saveManholeCover from '../core/interactors';

const BuildManholeCoverController = async (request: Request, response: Response) => {
    const { body } = request;
    const { manHole } = body;

    const ticket = await saveManholeCover(manHole);
    response.json(ticket);
};
export default BuildManholeCoverController;
