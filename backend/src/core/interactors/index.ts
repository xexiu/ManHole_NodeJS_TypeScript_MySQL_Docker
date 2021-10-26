import saveManholeCover from '../interactors/saveManholeCover.interactor';
import ManHoleMongo from '../../sources/manHoleMongo.source';

const manholeRepository = new ManHoleMongo();

export default saveManholeCover(manholeRepository);
