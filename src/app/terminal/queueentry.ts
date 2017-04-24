
export class QueueEntry {
    id: number;
    name: string;
    email: string;
    phone: string;
    timeWaiting: number;

    constructor(
        id: number,
        name: string,
        phone: string,
        email: string,
        timeWaiting: number,
    )
    {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.timeWaiting = timeWaiting;
    }
}
