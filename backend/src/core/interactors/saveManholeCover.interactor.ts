import ManHoleInterface from '../interfaces/ManHole.interface';
import ManHoleRepository from '../repositories/manHole.repository';

const saveManholeCover = (manHoleRepository: ManHoleRepository) => async (manHoleObj: ManHoleInterface) => {
    const { radio, material, decoration } = manHoleObj;
    const manHole: ManHoleInterface = manHoleRepository.create(radio, material, decoration);

    manHoleRepository.saveOnDB(manHole);

    return manHole;
};

export default saveManholeCover;
