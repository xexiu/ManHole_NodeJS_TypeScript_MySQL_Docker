import ManHoleRepository from '../repositories/manHole.repository';
import ManHoleInterface from '../interfaces/ManHole.interface';
import ManHoleEntity from '../entities/ManHole.entity';

const saveManholeCover = (manHoleRepository: ManHoleRepository) => async (manHoleGUID: string) => {
    const manHole: ManHoleInterface = await manHoleRepository.getByGUID(manHoleGUID);
    manHole.create();
    // const ticket: Ticket = {
    //     tripId: trip.id,
    //     tripName: trip.name,
    //     departureTime: trip.departureTime,
    //     arrivalTime: trip.arrivalTime,
    //     passengerName: passenger.name,
    //     passengerSurname: passenger.surname,
    // };

    // notifierRepository.notify(ticket, passenger.email);

    return manHole;
};

export default saveManholeCover;
