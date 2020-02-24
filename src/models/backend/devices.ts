export class Devices {
        id: number;
        name: string;
        roomID: number;
        type: TypeDevices;
        properties: Properties

        actions: Actions;
        sortOrder: number
        
}


export class Actions {
    setValue: number;
    turnOff: number;
    turnOn: number;
}

export class Properties {
    dead: number;
    disabled:number;
    value:number;
}

export enum TypeDevices {
    binary_light,
    dimmable_light
}