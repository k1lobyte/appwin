import { QueueEntry } from './queueentry';
import { QUEUE } from './mock-queue';
import { Injectable } from '@angular/core';

@Injectable()
export class TerminalService {

    getEntry(id: number): Promise<QueueEntry> {
        return this.getQueue().then(queues => queues.find(queue => queue.id == id));
    }

    getQueue(): Promise<QueueEntry[]> {
        return Promise.resolve(QUEUE);
    }
}
