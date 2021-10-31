import ManHoleMongo from '../../sources/manHoleMongo.source';
import saveManholeCover from '../interactors/saveManholeCover.interactor';

const manholeRepository = new ManHoleMongo();

export default saveManholeCover(manholeRepository);
