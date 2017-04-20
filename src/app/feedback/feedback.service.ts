import { Feedback } from './feedback';
import { FEEDBACK } from './mock-feedback';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedbackService {

  getFeedback(): Promise<Feedback[]> {
    return Promise.resolve(FEEDBACK);
  }

  getFeedbackByBusinessId(id: string): Promise<Feedback[]> {
    return this.getFeedback().then(feedback => feedback.filter(feedback => feedback.company_id === id));
  }
}
