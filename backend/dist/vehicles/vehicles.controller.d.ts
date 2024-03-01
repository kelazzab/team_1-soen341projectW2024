import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleStatusDto } from './dto/update-vehicle-status.dto';
import { Vehicle } from './vehicles.entity';
import { VehiclesService } from './vehicles.service';
export declare class VehiclesController {
    private vehiclesService;
    constructor(vehiclesService: VehiclesService);
    createTask(createVehicleDto: CreateVehicleDto): Promise<Vehicle>;
    getVehicleById(id: string): Promise<Vehicle>;
    updateTaskStatus(id: string, updateVehicleStatusDto: UpdateVehicleStatusDto): Promise<Vehicle>;
    deleteTask(id: string): Promise<void>;
}